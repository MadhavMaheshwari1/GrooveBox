import { ThemeContext } from '../../Contexts/ThemeContext';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import CategoryIcon from '@mui/icons-material/Category';
import PersonIcon from '@mui/icons-material/Person';
import { useState } from 'react';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';

const Drawer = () => {

    const { theme } = useContext(ThemeContext);

    return (
        <div
            className={`fixed top-[150px] flex flex-col h-[80vh] transition-width duration-500 rounded-3xl ${theme === 'dark' ? 'bg-[#191919]' : 'bg-[rgb(83,83,83)]'} w-[20rem] bg-[#292929] z-50`}
        >
            <div
                className="w-full h-auto"
            >
                <div class="logo relative">
                    <h1 className="font-bold">Groovify</h1>
                    <h1 className="font-bold">Groovify</h1>
                </div>
                <div className="flex flex-col font-semibold text-2xl gap-6 px-4 py-4">
                    <Link to="/" className={`flex items-center hover:bg-[#515151] py-2 px-4 flex-row gap-4 rounded-xl`}><HomeIcon /><span className='md:text-xl text-sm'>Home</span></Link>
                    <Link to="/" className={`flex items-center hover:bg-[#515151] py-2 px-4 flex-row gap-4} rounded-xl`}><CategoryIcon /><span className='md:text-xl text-sm'>Categories</span></Link>
                    <Link to="/" className={`flex items-center hover:bg-[#515151] py-2 px-4 flex-row gap-4 rounded-xl`}><PersonIcon /><span className='md:text-xl text-sm'>Artists</span></Link>
                    <Link to="/" className={`flex items-center hover:bg-[#515151] py-2 px-4 flex-row gap-4 rounded-xl`}><LibraryMusicIcon /><span className='md:text-xl text-sm'>Playlists</span></Link>
                </div>
            </div>
        </div>
    );
};

export default Drawer;
