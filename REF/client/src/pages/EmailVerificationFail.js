import { useNavigate } from 'react-router-dom';
import Container from '@material-ui/core/Container';


export const EmailVerificationFail = () => {
    const navigate= useNavigate();

    return (
        <Container maxWidth='md'>
            <h1>Uh no...</h1>
            <p>Email verification failed, something went wrong while trying to verify your email</p>
            <button onClick={() => navigate('/signup')}>Back to sign Up</button>
        </Container>
    );
};