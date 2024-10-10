import Drawer from "./Drawer"
import { useState, useContext } from "react";
import { FaBars } from "react-icons/fa6";
import { ThemeContext } from '../../Contexts/ThemeContext';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SearchIcon from '@mui/icons-material/Search';

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);
  const { theme } = useContext(ThemeContext);

  return (
    <div className="max-w-[1880px] mx-auto flex gap-8 items-center justify-between pe-10">
      <button
        className={`py-4 md:text-2xl text-xl ${theme === 'dark' ? 'text-white' : 'text-black'} ${isOpen ? 'ml-8' : 'ml-16'} transition-all duration-500 flex`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <FaBars />
      </button>
      <Drawer isOpen={isOpen} />
      <div className="sm:flex items-center sm:bg-slate-800 sm:ps-4 sm:w-1/2 hidden rounded-xl">
        <button><SearchIcon /></button>
        <input
          type="search"
          name="search"
          placeholder="Search for a song"
          id="search"
          className="bg-transparent py-4 px-4 w-full sm:block hidden"
        />
      </div>
      <div className="flex gap-8 items-center">
        <button className="sm:hidden block"><SearchIcon /></button>
        <button><FavoriteIcon /></button>
      </div>
    </div>
  )
}

export default Navbar