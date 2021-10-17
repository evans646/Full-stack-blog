import React,{ useState ,useEffect} from 'react';
import {useHistory } from 'react-router-dom';
import axios from 'axios';
import Container from '@material-ui/core/Container';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import { UpdateUsername} from './UpdateUsername'
;
export const ProfileSettingsPage = () => {
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
            {/* <h1>Reset your password</h1>
            <p>Enter your email to receive  a reset link  </p> */}
            <Box
      sx={{
        width: 500,
        maxWidth: '100%',
      }}
    >
      <TextField fullWidth label="fullWidth" id="fullWidth" placeholder='hi' />
    </Box>
        </Container>
    );
};