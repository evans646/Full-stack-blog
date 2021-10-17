import React, { useState,useEffect } from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';

import { useUser } from "../auth/useUser";



export const UpdateUsername = ()=>{

    const user = useUser();
    const {username} = user ||'';

    const [errorMessage, setErrorMessage] = useState('');
    const [showErrorMessage, setShowErrorMessage] = useState(false);
    const [success, setSuccess] = useState(false);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [usernameValue, setUsernameValue] = useState('');
    const [confirmUsernameValue, setConfirmUsernameValue] = useState('');

    useEffect(() => {
        if (showSuccessMessage || showErrorMessage) {
          setTimeout(() => {
            setShowSuccessMessage(false);
            setShowErrorMessage(false);
          }, 3000);
        }
      }, [showSuccessMessage, showErrorMessage]);



    const OnChangeUsernameClick= async()=>{
      try{
         await axios.put(`/api/users/changeUsername`,{ username: usernameValue})
         .then(() => setSuccess(true))
         .then(() => setShowSuccessMessage(true));
      }catch(e){
        setErrorMessage(e);
        setShowErrorMessage(true)
      }
    }



    return(
     <>
        <div style={{marginTop:'5%'}}>
            {success ?   <div className="content-container">
        {showSuccessMessage && (
        <div className="success">Username updated successfully</div>
      )}
          </div> : showErrorMessage && <div className="fail">{errorMessage}</div>}
           <Typography variant='h6' >Update your username</Typography>
     </div>
         <form className="loginPage" >
             <label>
               Confirm current username
                 <input type="text"
                     id="username"
                     minLength="8" value={confirmUsernameValue}
                     onChange={e => setConfirmUsernameValue(e.target.value)}
                     placeholder="username" required />
             </label>
             <label>
                 New username
                 <input type="text"
                     id="username"
                     minLength="8" value={usernameValue}
                     onChange={e => setUsernameValue(e.target.value)}
                     placeholder="password" required />
             </label>
             <button
                 disabled={usernameValue !==username}
                 onClick={OnChangeUsernameClick}>Submit
             </button>
         </form>
       
     </>
    )
}