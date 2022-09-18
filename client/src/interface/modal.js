import {useState,useEffect} from "react";
import {useNavigate,Link } from 'react-router-dom';
import Modal from "react-modal";
import { RiMenu3Line, RiCloseLine, RiLinkedinFill } from 'react-icons/ri';

import axios from "axios";
import {SignInPage} from "../pages/index"


import { useToken } from '../auth/useToken';
import {useQueryParams} from '../util/useQueryParams';

Modal.setAppElement('#root');
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    display: 'auto',
    borderRadius:'15px',
    width: '35%',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};


export function FormModal(){

    const [modalIsOpen, setIsOpen] = useState(false);
    const [,setToken] = useToken();

    const [errorMessage, setErrorMessage] = useState('');

    const [passwordValue, setPasswordValue] = useState('');
    const [usernameValue, setUsernameValue] = useState('');
    const [googleOauthUrl, setGoogleOauthUrl] = useState('');
    const [showErrorMessage, setShowErrorMessage] = useState(false);
    const [loading,setLoading] = useState(false);
    const navigate = useNavigate();
    // const Location = useLocation();
    //  console.log(lastLocation)
    const { token: oauthToken } = useQueryParams();

    useEffect(() => {
        if (showErrorMessage) {
            setTimeout(() => {
                setShowErrorMessage(false);
            }, 3000);
        }
    }, [showErrorMessage]);
    
    useEffect(() => {
        if (oauthToken) {
            setToken(oauthToken);
            window.location.reload();
            window.reload();
        }
    }, [oauthToken, setToken, navigate]);

    useEffect(() => {
        const loadOauthUrl = async () => {
            try {
                const response = await axios.get('/auth/google/url');
                const { url } = response.data;
                setGoogleOauthUrl(url);
            } catch (e) {
                console.log(e);
            }
        }
        loadOauthUrl();
    }, []);
  
    const onLogInClicked = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/api/login', {
                username: usernameValue,
                password: passwordValue,
            })
            const { token } = response.data;
            setTimeout(() => {
                setLoading(true)
            },3000)
            setToken(token);
            window.location.reload();
        } catch (e) {
            setErrorMessage(e.message);
            console.log(e.status)
            setShowErrorMessage(true)
        };
    };

    function openModal() {
      setIsOpen(true);
    };
  
    function closeModal() {
      setIsOpen(false);
    };
  
    return(
    <div>
      <button onClick={openModal}>Upvote</button>
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={customStyles} contentLabel="Example Modal">
        <RiCloseLine color="#000" size={20} onClick={closeModal} className="modalCloseIcon" />
        <p>
        <div style={{marginBottom:'5%'}}>
            {showErrorMessage && <div className="fail">{errorMessage}</div>}
        </div>
        <p className="sign" align="center">Sign in</p>
      <form className="form1"/>
      <input className="un" type="text" align="center" placeholder="Username" value={usernameValue} onChange={e => setUsernameValue(e.target.value)}
      />
      <input className="pass" type="password" align="center" placeholder="Password" onChange={e => setPasswordValue(e.target.value)}/>
      <button className="submit" align="center" disabled={!usernameValue || !passwordValue} onClick={onLogInClicked}>Sign in</button>
       <p className="forgot" align="center"><Link to="/forgot-password">Forgot Password?</Link></p>        
        </p>
      </Modal>
    </div>
    )
};