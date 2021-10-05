import React,{ useState ,useEffect} from 'react';
import {useHistory } from 'react-router-dom';
import axios from 'axios';
import Container from '@material-ui/core/Container';


export const ForgotPasswordPage = () => {
    const [errorMessage, setErrorMessage] = useState('');
    const [success, setSuccess] = useState(false);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [showErrorMessage, setShowErrorMessage] = useState(false);
    const [emailValue, setEmailValue] = useState('');

    const history = useHistory();

    useEffect(() => {
        if (showSuccessMessage || showErrorMessage) {
            setTimeout(() => {
                setShowSuccessMessage(false);
                setShowErrorMessage(false);
            }, 3000);
        }
    }, [showSuccessMessage, showErrorMessage]);

    const onSubmitClicked = async () => {
        try {
            await axios.put(`/api/forgot-password/${emailValue}`);
            setSuccess(true);
            setShowSuccessMessage(true)
            setTimeout(() => {
                history.push('/login')
            },3000)
        } catch (e) {
            setErrorMessage(e.message)
            setShowErrorMessage(true)

        };
    };
    return success ? (
        <Container maxWidth='md' className='bottom-container'>
           {showSuccessMessage && <div className="success">Success!</div>}
            <p>A reset link has been sent to your email</p>
        </Container>
    ) : (
        <Container maxWidth='md' className='bottom-container'>
            {showErrorMessage && <div className='fail'> {errorMessage}</div>}
            <div className='forgot-password'>
                <h1>Password reset</h1>
                <p>Enter your email to receive  a reset link  </p>
                <label htmlFor="email">
                    <input type="text" id="email"
                        minLength="3"
                        value={emailValue}
                        onChange={e => setEmailValue(e.target.value)}
                        placeholder="someone@email.com"/>
                </label>
                <button
                    disabled={!emailValue}
                    onClick={onSubmitClicked}
                >Send reset link</button>
            </div>
        </Container>
    );
};