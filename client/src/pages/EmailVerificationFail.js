import React from 'react';
import { useHistory } from "react-router-dom";
import Container from '@material-ui/core/Container';


export const EmailVerificationFail = () => {
    const history = useHistory();

    return (
        <Container maxWidth='md'>
            <h1>Uh no...</h1>
            <p>Email verification failed, something went wrong while trying to verify your email</p>
            <button onClick={() => history.push('/signup')}>Back to sign Up</button>
        </Container>
    );
};