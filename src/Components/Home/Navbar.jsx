import Drawer from "./Drawer"
import { useState, useContext, useEffect } from "react";
import { FaBars } from "react-icons/fa6";
import { ThemeContext } from '../../Contexts/ThemeContext';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SearchIcon from '@mui/icons-material/Search';
import CancelIcon from '@mui/icons-material/Cancel';
import Slider from "./Slider";

const Navbar = () => {

  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };


  const clearSearch = () => {
    setSearchTerm('');
  }

  const [isOpen, setIsOpen] = useState(false);
  const { theme } = useContext(ThemeContext);

  return (
    <div className="max-w-[1880px] mx-auto flex flex-col gap-8 items-center justify-between px-6">
      <div className="flex w-full justify-between ">
        {/* <button
          className={`py-4 md:text-2xl text-xl ${theme === 'dark' ? 'text-white' : 'text-black'} ${isOpen ? 'ml-8' : 'ml-16'} transition-all duration-500 flex`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <FaBars />
        </button> */}
        <Drawer />
        <div className={`relative sm:flex hidden items-center w-1/2  ${theme === 'dark' ? 'bg-slate-800' : 'bg-orange-300'} rounded-xl px-4 py-2`}>
          <button className="text-white">
            <SearchIcon />
          </button>
          <input
            type="search"
            name="search"
            placeholder="Search for a song"
            id="search"
            value={searchTerm}
            onChange={handleSearchChange}
            className="bg-transparent py-2 px-2 w-full text-white focus:outline-none"
          />
          {searchTerm && (
            <button onClick={clearSearch} className="absolute right-4 text-white">
              <CancelIcon />
            </button>
          )}
        </div>
        <div className="flex gap-8 items-center">
          <button className="sm:hidden block"><SearchIcon /></button>
          <div className={`relative w-[50px] h-[50px] rounded-full ${theme === 'dark' ? 'bg-[#292929]' : 'bg-[rgb(132,132,132)]'} cursor-pointer`}>
            <button><FavoriteIcon
              style={{
                stroke: theme === 'dark' ? 'white' : 'black',
                strokeWidth: '2',
              }}
              className="absolute text-transparent top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full"
            /></button>
          </div>
        </div>
      </div>
      {/* <Slider isLoading={loading} /> */}
    </div>
  )
}

export default Navbar