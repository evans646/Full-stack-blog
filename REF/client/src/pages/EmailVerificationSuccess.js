import { useNavigate } from 'react-router-dom';
import Container from '@material-ui/core/Container';


export const EmailVerificationSuccess = () => {
    const history = useNavigate();

    return (
        <Container maxWidth='md'>
            <h1>Success!</h1>
            <p>Thanks for verifying your email address, now you have access to all the application features.</p>
            <button onClick={() => history.push('/')}>Go to home</button>
        </Container>
    );
};