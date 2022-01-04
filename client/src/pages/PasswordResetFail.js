import { useHistory } from 'react-router-dom';
import Container from '@material-ui/core/Container';

export const PasswordResetFail = () => {
    const history = useHistory();

    return (
        <Container maxWidth='md'>
            <h1>Uh oh...</h1>
            <p>
                Something went wrong while trying to reset your password.
            </p>
            <button onClick={() => history.push('/login')}>Back to Log in</button>
        </Container>
    );
};