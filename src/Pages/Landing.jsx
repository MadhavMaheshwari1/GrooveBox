import { useState, useEffect } from "react";
import BackgroundImage from "../assets/BackgroundImage.avif"
import RythmixLogo from "../assets/RythmixLogo.svg"
import { FaSpotify } from "react-icons/fa6";
import SpotifyLogo from "../assets/SpotifyLogo.avif"
import { Link } from "react-router-dom"

const Landing = () => {

  return (
    <div className="max-w-[1920px] mx-auto h-[100vh] relative">
      <div className="w-full h-full relative bg-slate-900">
        <img src={BackgroundImage} alt="Background Image" className="absolute right-0 lg:w-[70%] w-full h-[100vh] object-cover clippedImg" />
        <div className="flex absolute z-50 lg:w-[60%] w-full py-10 xl:text-4xl md:text-2xl flex-col h-full justify-between text-white gap-16 items-start px-10">
          <div className="flex gap-4 items-center">
            <Link to="/"><img src={RythmixLogo} alt="Logo" width="70px" height="70px" /></Link>
            <Link to="/" className="-mt-2">Rythmix</Link>
          </div>
          <div className="flex flex-col gap-8">
            <p className="md:text-6xl text-4xl">Join the best music streaming service</p>
            <p className="lg:text-[9rem] text-6xl font-bold">Unleash your sonic story</p>
          </div>
          <Link to="/" className="flex gap-4 px-2">Login with <img src={SpotifyLogo} alt="Spotify Logo" width="40px" height="40px" /></Link>
        </div>

      </div>
    </div>
  );
};

export default Landing;
