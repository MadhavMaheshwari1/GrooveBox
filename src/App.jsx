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

function App() {
  const location = useLocation();
  return (
    <div className='overflow-hidden h-[100vh]'>
      <AnimatePresence mode="exitBeforeEnter">
        <div className="flex max-w-[1880px] mx-auto">
          <Sidebar />
          <Navbar />
        </div>
        <Routes key={location.pathname} location={location}>
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<Home />} />
          <Route path="/library" element={<Library />} />
        </Routes>
      </AnimatePresence>
    </div>
  )
}

export default App;
