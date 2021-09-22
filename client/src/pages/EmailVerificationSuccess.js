import { useHistory } from "react-router-dom";
import React from "react";


export const EmailVerificationSuccess = () => {
    const history = useHistory();

    return (
        <div>
            <h1>Success!</h1>
            <p>Thanks for verifying your email address, now you have access to all the application features.</p>
            <button onClick={() => history.push('/')}>Go to home</button>
        </div>
    );
};