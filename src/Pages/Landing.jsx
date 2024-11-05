import { useState, useEffect } from "react";
import BackgroundImage from "../assets/BackgroundImage.avif"

const Landing = () => {

  return (
    <div className="max-w-[1920px] mx-auto h-[100vh] relative">
      <div className="w-full h-full relative bg-slate-900">
        <img src={BackgroundImage} alt="Background Image" className="absolute right-0 h-[100vh] object-cover" />
        <div className="bg-slate-900 w-full h-full absolute z-10 clippedBg"></div>
      </div>
    </div>
  );
};

export default Landing;
