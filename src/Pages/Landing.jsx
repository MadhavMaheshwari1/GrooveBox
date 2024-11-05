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
        <div className="flex absolute z-50 w-full py-10 flex-col h-full justify-between text-gray-300 gap-16 items-start px-10">
          <div className="flex gap-4 items-center xl:text-4xl md:text-2xl justify-between w-full">
            <Link to="/"><img src={RythmixLogo} alt="Logo" width="70px" height="70px" /></Link>
            <Link to="/" className="-mt-2">Rythmix</Link>
          </div>
          <div className="flex flex-col gap-8 md:items-start items-center md:text-start text-center w-full">
            <p className="xl:text-6xl sm:text-4xl text-2xl">Join the best music streaming service</p>
            <p className="xl:text-[8rem] sm:text-6xl text-4xl font-bold">Unleash your sonic story</p>
            <Link to="/" className="flex gap-4 px-4 md:py-3 py-2 xl:w-[230px] sm:w-[190px] w-[140px]  xl:text-3xl sm:text-xl text-[12px] items-center ml-2 border-2 border-white rounded-3xl hover:rounded-[5rem] hover:border-green-500 transition-all">Login with <img src={SpotifyLogo} alt="Spotify Logo" className="sm:w-[40px] w-[30px] sm:h-[40px] h-[30px]" /></Link>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Landing;
