import React, { useState, useEffect } from "react";
// import GoogleButton from 'react-google-button';
// import GithubButton from 'react-github-login-button';
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

import { useToken } from "../auth/useToken";
import { useQueryParams } from "../util/useQueryParams";

export function SignInPage() {
  const [,setToken] = useToken();
  const [errorMessage, setErrorMessage] = useState("");

  const [passwordValue, setPasswordValue] = useState("");
  const [usernameValue, setUsernameValue] = useState(""); 
  const [googleOauthUrl, setGoogleOauthUrl] = useState("");
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const { token: oauthToken } = useQueryParams();

  useEffect(() => {
    if (showErrorMessage) {
      setTimeout(() => {
        setShowErrorMessage(false);
      }, 3000);
    }
  }, [showErrorMessage]);

  useEffect(() => {
    if (oauthToken) {
      setToken(oauthToken);
      navigate("/");
      window.reload();
    }
  }, [oauthToken, setToken, navigate]);

  useEffect(() => {
    const loadOauthUrl = async () => {
      try {
        const response = await axios.get("/auth/google/url");
        const { url } = response.data;
        setGoogleOauthUrl(url);
      } catch (e) {
        console.log(e);
      }
    };
    loadOauthUrl();
  }, []);

  const onLogInClicked = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/api/login", {
        username: usernameValue,
        password: passwordValue,
      });
      const { token } = response.data;
      setTimeout(() => {
        setLoading(true);
      }, 3000);
      setToken(token);
      navigate("/");
      window.location.reload();
    } catch (e) {
      setErrorMessage(e.message);
      console.log(e.status);
      setShowErrorMessage(true);
    }
  };

  const signInMessage = <h1>I am siging in</h1>;
  // So if status code is 500, incorrect username or pass
  // if it is 401 //invalid credentials user does not exist
  return (
    <div className="messageWrapper">
      <div style={{ marginBottom: "5%" }}>
        {showErrorMessage && <div className="fail">{errorMessage}</div>}
      </div>
      {loading && <div>{signInMessage}</div>}
      <div className="main">
        <p className="sign" align="center">
          Sign in
        </p>
        <form className="form1" />
        <input
          className="un "
          type="text"
          align="center"
          placeholder="Username"
          value={usernameValue}
          onChange={(e) => setUsernameValue(e.target.value)}
        />
        <input
          className="pass"
          type="password"
          align="center"
          placeholder="Password"
          onChange={(e) => setPasswordValue(e.target.value)}
        />
        <button
          className="submit"
          align="center"
          disabled={!usernameValue || !passwordValue}
          onClick={onLogInClicked}
        >
          Sign in
        </button>
        <p className="forgot" align="center">
          <Link to="/forgot-password">Forgot Password?</Link>
        </p>
      </div>
    </div>
  );
}
