import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import Navbar from '../Components/Home/Navbar';

const Home = () => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  const getRefreshToken = async () => {
    const refreshToken = localStorage.getItem('refresh_token');
    const url = "https://accounts.spotify.com/api/token";

    const payload = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        grant_type: 'refresh_token',
        refresh_token: refreshToken,
        client_id: import.meta.env.VITE_CLIENT_ID,
      }),
    };

    try {
      const body = await fetch(url, payload);

      if (!body.ok) {
        let errorDetails;
        try {
          errorDetails = await body.json();
        } catch {
          errorDetails = { message: "Unexpected error format" };
        }

        console.error('Error refreshing token:', errorDetails);
        return null; // Return null to indicate failure
      }

      const response = await body.json();
      console.log(response);

      localStorage.setItem('access_token', response.access_token);
      if (response.refresh_token) {
        localStorage.setItem('refresh_token', response.refresh_token);
      }
      return response.access_token;

    } catch (error) {
      console.error("Network error or unexpected response:", error);
      return null; // Return null in case of a network error
    }
  };

  const getUserData = async () => {
    try {
      const response = await axios.get('https://api.spotify.com/v1/me', {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
        },
      });
      setUser(response.data);
      console.log(response.data);
    } catch (error) {
      const accessToken = await getRefreshToken();
      if (accessToken) {
        try {
          const response = await axios.get('https://api.spotify.com/v1/me', {
            headers: {
              'Authorization': `Bearer ${accessToken}`,
            },
          });
          setUser(response.data);
          // console.log(response.data);
        } catch (secondError) {
          console.error("Error fetching user data after token refresh:", secondError);
        }
      } else {
        console.error("Unable to refresh token, navigating to login.");
        navigate('/');
      }
    }
  };

  const getToken = async (code) => {
    const codeVerifier = localStorage.getItem('code_verifier');
    const redirectUri = 'http://localhost:5173/home';
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
    };

    try {
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
      navigate('/home',{ replace: true });
    } catch (error) {
      console.error("Error fetching token:", error);
      setLoading(false); // Stop loading if an error occurs
    }
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const token = localStorage.getItem('refresh_token');

    if (token) {
      setLoading(false);
      getUserData();
      return;
    }

    const code = urlParams.get('code');
    if (!code) {
      navigate('/');
      return;
    }

    getToken(code);
  }, [navigate]);

  if (loading) {
    return (
      <div className="flex w-full h-[100vh] items-center justify-center">
        <div className="loader"></div>
      </div>
    );
  }

  return (
    <div className="max-w-[1920px] mx-auto h-[100vh] text-gray-300">
      <Navbar/>
    </div>
  );
};

export default Home;
