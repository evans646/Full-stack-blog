import { useEffect } from "react";
import { useNavigate } from 'react-router';
import Container from '@material-ui/core/Container';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faCheckCircle} from '@fortawesome/free-solid-svg-icons'




export function PleaseVerifyEmailPage() {
    const navigate = useNavigate();
  
    useEffect(() => {
        setTimeout(() => {
            navigate('/')
            window.reload();
        },3000)
    },[navigate])
 
    return (
        <Container maxWidth='md'>
            <h1>Thanks for signing up!</h1>
            <p>
                A verification email has been sent to the signed up email address please verify your email to continue
            </p>
        </Container>
    );
}

