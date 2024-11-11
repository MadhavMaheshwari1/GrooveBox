import { useState, useEffect } from "react";
import BackgroundImage from "../assets/BackgroundImage.avif"
import RythmixLogo from "../assets/RythmixLogo.svg"
import { FaSpotify } from "react-icons/fa6";
import SpotifyLogo from "../assets/SpotifyLogo.avif"
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Troubleshoot } from "@mui/icons-material";

const Landing = () => {

  const navigate = useNavigate();

  const onClickSpotify = async () => {
    const generateRandomString = (length) => {
      const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      const values = crypto.getRandomValues(new Uint8Array(length));
      return values.reduce((acc, x) => acc + possible[x % possible.length], "");
    }

    const codeVerifier = generateRandomString(64);

    const sha256 = async (plain) => {
      const encoder = new TextEncoder()
      const data = encoder.encode(plain)
      return window.crypto.subtle.digest('SHA-256', data)
    }

    const base64encode = (input) => {
      return btoa(String.fromCharCode(...new Uint8Array(input)))
        .replace(/=/g, '')
        .replace(/\+/g, '-')
        .replace(/\//g, '_');
    }

    const hashed = await sha256(codeVerifier)
    const codeChallenge = base64encode(hashed);
    // console.log(codeChallenge);

    const clientId = import.meta.env.VITE_CLIENT_ID;
    console.log(clientId);
    const redirectUri = 'http://localhost:5173/home';

    const scope = 'user-read-private user-read-email user-read-recently-played user-top-read user-follow-read user-follow-modify playlist-read-private playlist-read-collaborative playlist-modify-public';
    const authUrl = new URL("https://accounts.spotify.com/authorize")

    // generated in the previous step
    window.localStorage.setItem('code_verifier', codeVerifier);

    const params = {
      response_type: 'code',
      client_id: clientId,
      scope,
      code_challenge_method: 'S256',
      code_challenge: codeChallenge,
      redirect_uri: redirectUri,
    }

    authUrl.search = new URLSearchParams(params).toString();
    window.location.href = authUrl.toString();
  }


  // Check if the refresh token exists in localStorage
  useEffect(() => {
    const refreshToken = localStorage.getItem("refresh_token");
    if (refreshToken) {
      // If the refresh token exists, redirect to /home
      navigate("/home",{replace:true});
    }
  }, [navigate]);

  return (
    <div className="max-w-[1920px] mx-auto h-[100vh] relative">
      <div className="w-full h-full relative">
        <img
          src={BackgroundImage}
          alt="Background Image"
          loading="lazy"
          className="absolute right-0 w-full h-[100vh] object-cover clippedImg"
          srcSet={`${BackgroundImage} 1920w, ${BackgroundImage} 1280w, ${BackgroundImage} 640w`}
          sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 100vw"
        />
        <div className="flex absolute z-50 w-full py-10 flex-col h-full justify-between text-white gap-16 items-start px-10">
          <div className="flex gap-4 items-center xl:text-4xl md:text-2xl justify-between w-full">
            <Link to="/"><img src={RythmixLogo} alt="Logo" width="60px" height="60px" /></Link>
            <Link to="/" className="-mt-2 sm:text-3xl text-2xl hover:text-white duration-500 transition-all hover:font-semibold">Rythmix</Link>
          </div>
          <div className="flex flex-col gap-8 md:items-start items-center md:text-start text-center w-full mb-12">
            <p className="xl:text-6xl sm:text-4xl text-2xl">Join the best music streaming service</p>
            <p className="xl:text-[8rem] sm:text-6xl text-4xl font-bold">Unleash your sonic story</p>
            <Link to="/" onClick={onClickSpotify} className="flex gap-4 px-4 md:py-3 py-2 xl:w-[230px] sm:w-[190px] w-[140px]  xl:text-3xl sm:text-xl text-[12px] items-center ml-2 border-2 border-white rounded-3xl hover:rounded-[5rem] hover:border-green-500 transition-all">Login with <img src={SpotifyLogo} alt="Spotify Logo" className="sm:w-[40px] w-[30px] sm:h-[40px] h-[30px]" /></Link>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Landing;
