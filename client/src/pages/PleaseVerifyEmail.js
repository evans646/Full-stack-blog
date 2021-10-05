import React,{ useEffect } from "react";
import { useHistory } from "react-router";
import Container from '@material-ui/core/Container';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faCheckCircle} from '@fortawesome/free-solid-svg-icons'



export const PleaseVerifyEmailPage = () => {
    const history = useHistory();
  
    useEffect(() => {
        setTimeout(() => {
            history.push('/')
            window.location.reload();
        },3000)
    },[history])
 
    return (
        <Container maxWidth='md'>
            <h1>Thanks for signing up!</h1>
            <p>
                A verification email has been sent to the signed up email address please verify your email to continue
            </p>
        </Container>
    );
};