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
    <div className={`fixed z-50 ${location.pathname === '/' ? 'hidden' : ''} cursor-pointer`}>
      <div className="flex flex-col items-center">
        <div className="mt-4 w-[120px] rounded-xl flex flex-col items-center py-[100px] text-white gap-6">
          <Link to="/home" className={`flex flex-col items-center ${location.pathname.slice(1) === 'home' ? 'bg-[#2B2E35] font-semibold' : ''} py-3 px-5 rounded-xl`}><FaHouse fill={`${location.pathname.slice(1) === 'home' ? 'white' : '#2B2E35'}`} strokeWidth={40} style={{ width: '2rem', height: '2rem' }} />Home</Link>

          <Link to="/library" className={`flex flex-col items-center ${location.pathname.slice(1) === 'library' ? 'bg-[#2B2E35] font-semibold' : ''} py-3 px-5 rounded-xl`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 -960 960 960"
              fill={'white'}
              strokeWidth={40}
              style={{ width: '2.5rem', height: '2.5rem' }}
            >
              <path
                d="M500-360q42 0 71-29t29-71v-220h120v-80H560v220q-13-10-28-15t-32-5q-42 0-71 29t-29 71q0 42 29 71t71 29ZM320-240q-33 0-56.5-23.5T240-320v-480q0-33 23.5-56.5T320-880h480q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H320Zm0-80h480v-480H320v480ZM160-80q-33 0-56.5-23.5T80-160v-560h80v560h560v80H160Zm160-720v480-480Z"
              />
            </svg>
            Library</Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar