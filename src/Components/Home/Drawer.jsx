import { ThemeContext } from '../../Contexts/ThemeContext';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import CategoryIcon from '@mui/icons-material/Category';
import PersonIcon from '@mui/icons-material/Person';
import { useState } from 'react';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';

const Drawer = ({isOpen}) => {

    return (
        <div
            className={`fixed top-[120px] flex flex-col md:h-full h-auto transition-width duration-500 rounded-xl ${isOpen ? 'w-[18rem] bg-[#292929]' : 'w-[9.5rem]'} z-50`}
        >
            <div
                className="w-full min-h-[100vh] h-auto"
            >
                <div className="flex flex-col font-semibold text-2xl gap-6 px-4 justify-center py-4">
                    {/* {isOpen && <Link to="/" className='text-orange-600 font-bold py-2 px-4'>Groove Box</Link>} */}
                    <Link to="/" className={`flex items-center hover:bg-[#414040] py-2 px-4 ${isOpen ? 'flex-row gap-4' : 'flex-col gap-2'} rounded-xl`}><HomeIcon /><span className='md:text-xl text-sm'>Home</span></Link>
                    <Link to="/" className={`flex items-center hover:bg-[#414040] py-2 px-4 ${isOpen ? 'flex-row gap-4' : 'flex-col gap-2'} rounded-xl`}><CategoryIcon /><span className='md:text-xl text-sm'>Categories</span></Link>
                    <Link to="/" className={`flex items-center hover:bg-[#414040] py-2 px-4 ${isOpen ? 'flex-row gap-4' : 'flex-col gap-2'} rounded-xl`}><PersonIcon /><span className='md:text-xl text-sm'>Artists</span></Link>
                    <Link to="/" className={`flex items-center hover:bg-[#414040] py-2 px-4 ${isOpen ? 'flex-row gap-4' : 'flex-col gap-2'} rounded-xl`}><LibraryMusicIcon /><span className='md:text-xl text-sm'>Playlists</span></Link>
                </div>
            </div>
        </div>
    );
};

export default Drawer;
