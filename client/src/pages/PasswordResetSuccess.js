import React from "react";
import { useNavigate } from 'react-router-dom';

export const PasswordResetSuccess = () => {
    const navigate = useNavigate();

    return (
        <div id="page-body">
            <div class="successII alert">
               <div class="alert-body">
                  Success !
               </div>
               <p>
                Your password has been reset, now please login with your new password.
            </p>
            </div>
            <button onClick={() => navigate("/signin")} className="submit">SignIn</button>
        </div>
    );
};