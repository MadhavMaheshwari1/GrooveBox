import { useState, useContext, useEffect } from "react";
import { FaBars } from "react-icons/fa6";
import { FaHouse } from "react-icons/fa6";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { UserContext } from "../../Contexts/UserContext";
import { Menu } from 'lucide-react';

const Navbar = () => {

  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const { loading } = useContext(UserContext);

  const clearSearch = () => {
    setSearchTerm('');
  }

  if (loading) {
    return;
  }

  return (
    <div className={`fixed z-50 ${location.pathname === '/' ? 'hidden' : ''} cursor-pointer lg:top-0 lg:w-auto w-full bottom-0 `}>
      <div className="flex w-full items-center">
        <div className="mt-4 lg:text-lg text-[md] lg:w-[120px] w-full rounded-xl flex lg:flex-col flex-row items-center lg:justify-start justify-center lg:py-[100px] py-[20px] text-white gap-6">
          <Link to="/home" className={`flex flex-col items-center gap-1 ${location.pathname.slice(1) === 'home' ? 'bg-[#2B2E35] font-semibold' : ''} md:py-3 md:px-5 px-3 py-2 rounded-xl`}><FaHouse fill={`${location.pathname.slice(1) === 'home' ? 'white' : '#2B2E35'}`} strokeWidth={40} className="w-5 h-5 md:w-7 md:h-7" />Home</Link>
          <Link to="/library" className={`flex flex-col items-center ${location.pathname.slice(1) === 'library' ? 'bg-[#2B2E35] font-semibold' : ''}  md:py-3 md:px-5 px-3 py-2 rounded-xl `}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 -960 960 960"
              fill="white"
              strokeWidth={40}
              className="w-6 h-6 md:w-8 md:h-8"
            >
              <path d="M500-360q42 0 71-29t29-71v-220h120v-80H560v220q-13-10-28-15t-32-5q-42 0-71 29t-29 71q0 42 29 71t71 29ZM320-240q-33 0-56.5-23.5T240-320v-480q0-33 23.5-56.5T320-880h480q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H320Zm0-80h480v-480H320v480ZM160-80q-33 0-56.5-23.5T80-160v-560h80v560h560v80H160Zm160-720v480-480Z" />
            </svg>

            Library</Link>

        </div>
      </div>
    </div>
  )
}

export default Navbar