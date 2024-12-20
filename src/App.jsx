// src/App.js
import './app.css';
import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom';
import Landing from './Pages/Landing';
import Home from "./Pages/Home"
import Library from "./Pages/Library";
import Sidebar from './Components/Home/Sidebar';
import Navbar from './Components/Home/Navbar';
import { AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import { useState } from 'react';

function App() {
  const location = useLocation();
  const [showMenu, setShowMenu] = useState(false);

  return (
    <AnimatePresence mode="exitBeforeEnter">
      <div className="fixed flex max-w-[1880px] mx-auto right-0 left-0 lg:top-0 bottom-0 h-full lg:justify-start justify-center z-50 cursor-pointer">
        <Sidebar setShowMenu={setShowMenu} showMenu={showMenu} />
        <Navbar setShowMenu={setShowMenu} showMenu={showMenu} />
      </div>
      <Routes key={location.pathname} location={location}>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/library" element={<Library />} />
      </Routes>
    </AnimatePresence>
  )
}

export default App;
