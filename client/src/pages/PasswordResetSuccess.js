import { useNavigate } from 'react-router-dom';


export const PasswordResetSuccess = () => {
    const history = useNavigate();

    return (
        <div maxWidth='md'>
            <h1>Success!</h1>
            <p>
                Your password has been reset, now you can login with your new password.
            </p>
            <button onClick={() => history.push('/login')}>Log in</button>
        </div>
    );
};