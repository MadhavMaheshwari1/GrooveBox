// src/Components/Login.js
import React from "react";

const Login = () => {
  const CLIENT_ID = "4b2bb1cd8b8f40bea956d7e12a81a493";
  const REDIRECT_URI = "http://localhost:3000";
  const AUTH_URL = `https://accounts.spotify.com/authorize?response_type=token&client_id=${CLIENT_ID}&redirect_uri=${encodeURIComponent(
    REDIRECT_URI
  )}&scope=user-read-private user-read-email`;

  return (
    <div className="login-page">
      <h1>Welcome to GrooveBox</h1>
      <a href={AUTH_URL}>
        <button className="login-button">Login with Spotify</button>
      </a>
    </div>
  );
};

export default Login;
