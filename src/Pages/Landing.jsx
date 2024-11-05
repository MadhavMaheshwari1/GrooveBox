import { useState, useEffect } from "react";
import BackgroundImage from "../assets/BackgroundImage.avif"
import {Link} from "react-router-dom"

const Landing = () => {

  return (
    <div className="max-w-[1920px] mx-auto h-[100vh] relative">
      <div className="w-full h-full relative bg-slate-900 px-10">
        <img src={BackgroundImage} alt="Background Image" className="absolute right-0 w-full h-[100vh] object-cover clippedImg" />
        <div className="flex">
          <p className="xl:text-8xl md:text-4xl text-wrap text-white bg-transparent absolute z-50 w-[500px] py-10">Join the best music streaming service</p>
          <Link to="/"></Link>
        </div>

      </div>
    </div>
  );
};

export default Landing;
