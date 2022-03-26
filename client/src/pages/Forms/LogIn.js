import React, { useState,useEffect } from 'react';
import Container from '@material-ui/core/Container';
import GoogleButton from 'react-google-button';
import GithubButton from 'react-github-login-button';
import {useNavigate,Link } from 'react-router-dom';

import axios from 'axios';
import Typography from '@mui/material/Typography';


import { useToken } from '../../auth/useToken';
import {useQueryParams} from '../util/useQueryParams';



import {IoMdWarning} from "react-icons/io";


import './login.css';



export function LoginPage (){
 
    const [, setToken] = useToken();

    const [errorMessage, setErrorMessage] = useState('');

    const [passwordValue, setPasswordValue] = useState('');
    const [usernameValue, setUsernameValue] = useState('');
    const [googleOauthUrl, setGoogleOauthUrl] = useState('');
    const [showErrorMessage, setShowErrorMessage] = useState(false);
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
            navigate('/')
            window.location.reload();
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
            const response = await axios.post('api/login', {
                username: usernameValue,
                password: passwordValue,
            })
            const { token } = response.data;
            setToken(token);
            navigate('/')
            // history.goBack();
            window.location.reload();
        } catch (e) {
            setErrorMessage(e.message);
            console.log(e.status)
            setShowErrorMessage(true)
        };
    };
    // So if status code is 500, incorrect username or pass
    // if it is 401 //invalid credentials user does not exist
    return (
        <Container maxWidth="md" className='bottom-container'>
             <div style={{marginBottom:'5%'}}>
            {showErrorMessage && <div className="fail"><IoMdWarning style={{marginRight:'3%'}}/> {errorMessage}</div>}
            </div>
            <form className="loginPage">
                <Typography variant='h5' className='loginPage-header'>Login</Typography>
                <label htmlFor="username">
                    username:
                    <input type="text" id="username"
                        minLength="3"
                        value={usernameValue}
                        onChange={e => setUsernameValue(e.target.value)}
                        placeholder="username" />
                </label>
                <label>
                    Password:
                    <input type="password"
                        id="password"
                        minLength="8" value={passwordValue}
                        onChange={e => setPasswordValue(e.target.value)}
                        placeholder="password" required />
                </label>
                <button
                    disabled={!usernameValue || !passwordValue}
                    onClick={onLogInClicked}>Log In
                </button>
                <div  className='social-login-options'>
                <GoogleButton disabled={!googleOauthUrl} type="dark" onClick={() => { window.location.href = googleOauthUrl }}/>
                <div style={{paddingTop:'10px'}}>
                <GithubButton   onClick={() => {window.location.href='https://github.com/login/oauth/authorize?scope=user:email&client_id=7e882fa62dfb6bdf83e8'}}/>
                </div>
                </div>
                <hr/>
                <div className='link'>
                    <Link to='/account/register'><em>Don't have an account? register</em></Link>
                    <Link to='/forgot-password'><em>Forgot your password ?</em></Link>
                </div>
            </form>
        </Container>
    );
};