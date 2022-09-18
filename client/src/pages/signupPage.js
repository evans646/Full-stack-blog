import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

import { useToken } from "../auth/useToken";

export function SignupPage () {

  const [, setToken] = useToken();
  const [errorMessage, setErrorMessage] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [usernameValue, setUsernameValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [confirmPasswordValue, setConfirmPasswordValue] = useState("");
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (showErrorMessage) {
      setTimeout(() => {
        setShowErrorMessage(false);
      }, 3000);
    }
  }, [showErrorMessage]);

  const onSignUpClicked = async () => {
    try {
      const response = await axios.post("http://localhost:8080/api/signup", {
        email: emailValue,
        password: passwordValue,
        username: usernameValue,
      });
      const { token } = response.data;
      setToken(token);
      navigate("/please-verify");
    } catch (e) {
      setErrorMessage(e.message);
      setShowErrorMessage(true);
    }
  };

  return(
  <div>
    <div>
      {showErrorMessage && <div className="fail">{errorMessage}</div>}
 </div>
 <div className="main">
    <p className="sign" align="center">Sign up</p>
    <span >It's free of charge</span>
    <form className="form1"/>
      <input 
      className="un " 
      type="email" align="center"
      minLength="3"
      value={emailValue}
      onChange={e => setEmailValue(e.target.value)}
      placeholder="email"
    />
      <input className="un"
       type="text"
      align="center" 
      value={usernameValue}
      onChange={e => setUsernameValue(e.target.value)}
      placeholder="username" required 
      />
      <input className="pass"
       type="password"
       align="center" 
       value={passwordValue}
       placeholder="password" required 
       onChange={e => setPasswordValue(e.target.value)}
      />
      <input className="pass"
       type="password"
       align="center"
       placeholder=" confirm password"  
       value={confirmPasswordValue}
        onChange={e => setConfirmPasswordValue(e.target.value)}
         required
      />
      <button 
      className="submit"
       align="center"
       disabled={
        !emailValue || !passwordValue ||
        passwordValue !== confirmPasswordValue}
      onClick={onSignUpClicked}>Sign up</button>
      <p className="forgot" align="center">Already have an account ?<a href="/signin">Sign in</a></p>                
    </div>
  </div>
  )
};
