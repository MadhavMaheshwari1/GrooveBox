import { ThemeContext } from '../../Contexts/ThemeContext';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import CategoryIcon from '@mui/icons-material/Category';
import PersonIcon from '@mui/icons-material/Person';
import { useState } from 'react';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import Logo from '../../assets/Logo.png';

const Drawer = ({ isOpen, setIsOpen }) => {

    const { theme } = useContext(ThemeContext);

    return (
        <div
            className={`fixed top-[1.5rem] ${isOpen ? 'flex' : 'md:flex hidden'} h-[92vh] transition-all duration-500 rounded-[30px] ${theme === 'dark' ? 'bg-[#181b22]' : 'bg-[rgb(83,83,83)]'} md:w-[18rem] w-[12rem] bg-[#292929] z-50`}
        >
            <div
                className="w-full h-auto"
            >
                <div className="font-semibold md:text-3xl text-2xl flex flex-col gap-16 px-4 py-4 text-[#98989c]">
                    <div className="logo flex items-center justify-start cursor-pointer gap-1" onClick={() => setIsOpen(!isOpen)}>
                        <img src={Logo} alt="Logo" className='md:w-[40px] md:h-[40px] w-[35px] h-[35px]'/>
                        <h1 className="font-bold text-[#f77519] text-center" >Groovify</h1>
                    </div>
                    <div className="links flex flex-col gap-6">
                        <Link to="/" className={`flex items-center hover:bg-[#515151] py-2 px-4 gap-4 rounded-xl`}><HomeIcon /><span className='md:text-xl text-sm'>Home</span></Link>
                        <Link to="/" className={`flex items-center hover:bg-[#515151] py-2 px-4 gap-4 rounded-xl`}><CategoryIcon /><span className='md:text-xl text-sm'>Categories</span></Link>
                        <Link to="/" className={`flex items-center hover:bg-[#515151] py-2 px-4 gap-4 rounded-xl`}><PersonIcon /><span className='md:text-xl text-sm'>Artists</span></Link>
                        <Link to="/" className={`flex items-center hover:bg-[#515151] py-2 px-4 gap-4 rounded-xl`}><LibraryMusicIcon /><span className='md:text-xl text-sm'>Playlists</span></Link>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Drawer;
