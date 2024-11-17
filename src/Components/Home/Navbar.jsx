import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import RythmixLogo from "../../assets/RythmixLogo.svg";
import { Search } from 'lucide-react';
import { useState, useContext } from 'react';
import { useLocation } from "react-router-dom";
import { UserContext } from "../../Contexts/UserContext";
import { UserRoundPen } from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { LogOut } from 'lucide-react';

const Navbar = () => {
  const [searchValue, setSearchValue] = useState('');
  const [showMenu, setShowMenu] = useState(false);
  const location = useLocation();

  const { user, loading } = useContext(UserContext);
  const { images } = user;
  const { external_urls } = user;
  const navigate = useNavigate();

  const logoutHandler = () => {
    localStorage.clear();
    window.location.reload();
  }

  const inputHandler = (searchValue) => {
    setSearchValue(searchValue);
  }

  if (loading) {
    return (
      <motion.div
        className={`flex w-full h-[100vh] items-center justify-center ${location.pathname === '/' ? 'hidden' : ''}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: .5 }}
      >
        <div className="loader"></div>
      </motion.div>
    );
  }

  return (
    <>
      <div className="fixed z-40 w-[1880px] h-full" onClick={() => setShowMenu(false)}>
        <div className={`flex py-8 w-full px-8 justify-between ${location.pathname === '/' ? 'hidden' : ''}`}>
          <div className="flex w-full justify-between">
            <div className="flex gap-12">
              <Link to="/home"><img src={RythmixLogo} alt="Logo" width="55px" height="55px" className="cursor-pointer" /></Link>
              <div className="flex h-[60px] -mt-1 w-[620px] bg-transparent items-center rounded-xl border-[1px] border-gray-400 gap-4 relative">
                <label htmlFor="search" className='cursor-pointer'><Search style={{ width: '2rem', height: '2rem', color: '#E5E7EB' }} className='ms-4' /></label>
                <input type="text" id="search" onChange={e => inputHandler(e.target.value)} value={searchValue} placeholder='Search songs, albums, artists and podcasts' className=' text-gray-200 py-3 text-2xl w-[600px] bg-transparent placeholder:text-2xl placeholder:text-gray-200 placeholder:font-semibold focus:outline-none' />
                <div className="absolute w-full h-full glass z-[-1]"></div>
              </div>
            </div>
            <div className="relative w-[80px] h-[80px] cursor-pointer flex justify-center items-center hover:scale-105 group transition-all duration-500">
              {images && images.length > 0 && (
                <button onClick={(e) => { setShowMenu(!showMenu); e.stopPropagation() }}><img src={images[1].url} alt="Profile Image" className='rounded-full w-[60px] h-[60px] backdrop-blur-lg' onContextMenu={(e) => e.preventDefault()} /></button>
              )}
              <div className="absolute w-full h-full glass top-0 z-[-1] rounded-full"></div>
              {!showMenu && (<div className="opacity-0 group-hover:opacity-100 top-24 transition-all font-semibold duration-600 absolute text-white bg-[#2B2E35] rounded-md py-2 px-4 z-[1]">Madhav</div>)}
              {showMenu && (
                <div className="absolute w-[200px] h-[150px] glass flex items-center justify-center top-24 right-0 z-[1] rounded-xl py-4 text-white text-xl cursor-pointer">
                  <div className="flex flex-col gap-4">
                    <Link to={external_urls.spotify} className='flex justify-between w-[180px] mx-auto bg-[#2B2E35] py-2 px-3 rounded-xl'><UserRoundPen />Profile</Link>
                    <button onClick={() => logoutHandler()} className='flex justify-between w-[180px] mx-auto bg-[#2B2E35] py-2 px-3 rounded-xl'><LogOut />Logout</button>
                  </div>

                </div>)
              }
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar;