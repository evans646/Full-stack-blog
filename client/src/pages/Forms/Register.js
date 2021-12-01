import React, { useState, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';
import axios from 'axios';
import Container from '@material-ui/core/Container';
import Typography from '@mui/material/Typography';
import { useToken } from '../../auth/useToken';
import './register.css'



export const RegisterPage = () => { 

const [,setToken] = useToken();
const [errorMessage, setErrorMessage] = useState('');
const [emailValue, setEmailValue] = useState('');
const [usernameValue, setUsernameValue] = useState('');
const [passwordValue, setPasswordValue] = useState('');
const [confirmPasswordValue, setConfirmPasswordValue] = useState('');
const [showErrorMessage, setShowErrorMessage] = useState(false);

const history = useHistory();

useEffect(() => {
    if (showErrorMessage) {
        setTimeout(() => {
            setShowErrorMessage(false);
        }, 3000);
    };
}, [showErrorMessage]);

const onSignUpClicked = async() => {
    try {
        const response = await axios.post('api/signup', {
            email: emailValue,
            password: passwordValue,
            username: usernameValue,
        });
        const { token } = response.data;
        setToken(token);
        history.push('/please-verify');
    } catch (e) {
        setErrorMessage(e.message);
        setShowErrorMessage(true)
    };
};

return (
<Container maxWidth='md' className='register-container'>
{showErrorMessage && <div className="fail">{errorMessage}</div>}
    <div id="registration-page">
    <Typography variant='h5' className='registration-header'>Register</Typography>
                <label htmlFor="username">
                    username:
                    <input type="text" id="username"
                        value={usernameValue}
                        onChange={e => setUsernameValue(e.target.value)}
                        placeholder="username" required />
                </label>
                <label htmlFor="email">
                    email:
                    <input type="text" id="email"
                        minLength="3"
                        value={emailValue}
                        onChange={e => setEmailValue(e.target.value)}
                        placeholder="email" />
                </label>
                <label>
                    Password:
                    <input type="password"
                        id="password"
                        value={passwordValue}
                        onChange={e => setPasswordValue(e.target.value)}
                        placeholder="password" required />
                </label>
                <label htmlFor='confirm-password'>
                   Confirm Password:
                    <input type="password"
                        id="confirm-password"
                        value={confirmPasswordValue}
                        onChange={e => setConfirmPasswordValue(e.target.value)}
                        placeholder="password" required />
                </label>
                <button  disabled={
                    !emailValue || !passwordValue ||
                    passwordValue !== confirmPasswordValue}
                  onClick={()=>onSignUpClicked()}>Submit</button>
                 <div className='link'>
                 <Link to='/login'><em>Have an account already? login</em></Link>
                 </div>
        </div>
   </Container>
)};