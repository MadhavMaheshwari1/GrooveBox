import React from 'react';
import { Link } from 'react-router-dom';
import RythmixLogo from "../../assets/RythmixLogo.svg";
import { Search } from 'lucide-react';
import { useState, useContext } from 'react';
import { useLocation } from "react-router-dom";
import { UserContext } from "../../Contexts/UserContext";
import { motion } from 'framer-motion';

const Navbar = () => {
    const [searchValue, setSearchValue] = useState('');
    const location = useLocation();

    const { user, loading } = useContext(UserContext);
    const { images } = user;
    console.log(user);
    console.log(images);

    const inputHandler = (searchValue) => {
        setSearchValue(searchValue);
    }

    if (loading) {
        return (
            <motion.div
                className="flex w-full h-[100vh] items-center justify-center"
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
        <div className={`flex gap-12 py-8 w-full justify-between ${location.pathname === '/' ? 'hidden' : ''}`}>
            <div className="flex w-full justify-between">
                <div className="flex gap-12">
                    <Link to="/home"><img src={RythmixLogo} alt="Logo" width="55px" height="55px" className="cursor-pointer" /></Link>
                    <div className="flex h-[60px] -mt-1 w-[480px] bg-transparent items-center rounded-xl border-[1px] border-gray-400 gap-4 relative">
                        <label htmlFor="search" className='cursor-pointer'><Search style={{ width: '2rem', height: '2rem', color: '#E5E7EB' }} className='ms-4' /></label>
                        <input type="text" id="search" onChange={e => inputHandler(e.target.value)} value={searchValue} placeholder='Search for a Song' className=' text-gray-200 py-3 text-2xl w-[500px] bg-transparent placeholder:text-2xl placeholder:text-gray-200 placeholder:font-semibold focus:outline-none' />
                        <div className="absolute w-full h-full glass z-[-1]"></div>
                    </div>
                </div>
                <div className="relative w-[90px] h-[90px] cursor-pointer flex justify-center items-center">
                    {images && images.length > 0 && (
                        <img src={images[1].url} alt="Profile Image" className='rounded-full w-[70px] h-[70px] backdrop-blur-lg' />
                    )}
                    <div className="absolute w-full h-full glass top-0 z-[-1] rounded-full"></div>
                </div>
            </div>
        </div>
    )
}

export default Navbar