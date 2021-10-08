import React, { useState,useEffect } from 'react';
import Container from '@material-ui/core/Container';
import GoogleButton from 'react-google-button';
import GithubButton from 'react-github-login-button';
import {useHistory,Link } from 'react-router-dom';
import axios from 'axios';


import { useToken } from '../../auth/useToken';
import {useQueryParams} from '../util/useQueryParams';
import './login.css';



export const LogInPage = () => {
 
    const [, setToken] = useToken();

    const [errorMessage, setErrorMessage] = useState('');

    const [passwordValue, setPasswordValue] = useState('');
    const [usernameValue, setUsernameValue] = useState('');
    const [googleOauthUrl, setGoogleOauthUrl] = useState('');
    const [showErrorMessage, setShowErrorMessage] = useState(false);
    let   history = useHistory();
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
            history.push('/');
            window.location.reload();
        }
    }, [oauthToken, setToken, history]);

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
            const response = await axios.post('/api/login', {
                username: usernameValue,
                password: passwordValue,
            })
            const { token } = response.data;
            setToken(token);
            history.push('/')
            // history.goBack();
            window.location.reload();
        } catch (e) {
            setErrorMessage(e.message);
            console.log(e.status)
            setShowErrorMessage(true)
        };
    };

    //So if status code is 500, incorrect username or pass
    //if it is 401 //invalid credentials user does not exist
    return (
        <Container maxWidth="md" className='bottom-container'>
             <div style={{marginBottom:'5%'}}>
            {showErrorMessage && <div className="fail">{errorMessage}</div>}
            </div>
            <form className="loginPage" id="registration">
                <h1>Login</h1>
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
                <div style={{marginLeft:'27%',padding:'10px'}}>
                <GoogleButton disabled={!googleOauthUrl} type="dark" onClick={() => { window.location.href = googleOauthUrl }}/>
                <div style={{paddingTop:'10px'}}>
                <GithubButton   onClick={() => {window.location.href='https://github.com/login/oauth/authorize?scope=user:email&client_id=7e882fa62dfb6bdf83e8'}}/>
                </div>
                </div>
                <hr/>
                <div className='link'>
                    <Link to='/signup'><em>Don't have an account? Sign Up</em></Link>
                    <Link to='/forgot-password'><em>Forgot your password?</em></Link>
                </div>
            </form>
        </Container>
    );
};