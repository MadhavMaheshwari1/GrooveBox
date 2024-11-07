import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

const Home = () => {

  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const getRefreshToken = async () => {

    // refresh token that has been previously stored
    const refreshToken = localStorage.getItem('refresh_token');
    // console.log(refreshToken);

    const url = "https://accounts.spotify.com/api/token";

    if (refreshToken === null) return;

    const payload = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: new URLSearchParams({
        grant_type: 'refresh_token',
        refresh_token: refreshToken,
        client_id: import.meta.env.VITE_CLIENT_ID
      }),
    }
    const body = await fetch(url, payload);
    if (!body.ok) {
      const error = await body.json();
      console.error('Error fetching token:', error);
      return;
    }
    const response = await body.json();
    console.log(response);

    localStorage.setItem('access_token', response.access_token);
    if (response.refresh_token) {
      localStorage.setItem('refresh_token', response.refresh_token);
    }
  }

  const getToken = async (code) => {

    let codeVerifier = localStorage.getItem('code_verifier');
    const redirectUri = 'https://groovebox-omega.vercel.app/home';
    const url = 'https://accounts.spotify.com/api/token';

    const payload = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        client_id: import.meta.env.VITE_CLIENT_ID,
        grant_type: 'authorization_code',
        code,
        redirect_uri: redirectUri,
        code_verifier: codeVerifier,
      }),
    }

    const body = await fetch(url, payload);
    if (!body.ok) {
      const error = await body.json();
      console.error('Error fetching token:', error);
      return;
    }
    const response = await body.json();

    localStorage.setItem('access_token', response.access_token);
    localStorage.setItem('refresh_token', response.refresh_token);
    console.log(response);
    setLoading(false);
    navigate('/home');
  }


  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const token = window.localStorage.getItem('refresh_token');

    if (token !== null) {
      getRefreshToken();
      setLoading(false);
      return;
    };

    let code = urlParams.get('code');
    // console.log(code);

    if (code === null) {
      navigate('/');
      return;
    }
    getToken(code);
  }, [])


  if (loading) {
    return <div className='flex w-full h-[100vh] items-center justify-center'>
      <div className="loader"></div>
    </div>
  }

  return (
    <div className="max-w-[1920px] mx-auto h-[100vh] text-gray-300">Home</div>
  )
}

export default Home