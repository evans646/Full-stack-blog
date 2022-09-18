import { useEffect } from "react";
import { useNavigate } from 'react-router';



export function PleaseVerifyEmailPage() {
    const navigate = useNavigate();
  
    useEffect(() => {
        setTimeout(() => {
            navigate('/signin')
            window.location.reload();
        },230000000)
    },[navigate])
 
    return (
        <div className='pleaseVerifyPage'>
            <h1>Thanks for signing up!</h1>
            <p>
                A verification email has been sent to the signed up email 
                address please verify your email to continue
            </p>
        </div>
    );
};

