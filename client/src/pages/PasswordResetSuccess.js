import { useHistory } from 'react-router-dom';
import Container from '@material-ui/core/Container';

export const PasswordResetSuccess = () => {
    const history = useHistory();

    return (
        <Container maxWidth='md'>
            <h1>Success!</h1>
            <p>
                Your password has been reset, now please login with your new password.
            </p>
            <button onClick={() => history.push('/login')}>Log in</button>
        </Container>
    );
};