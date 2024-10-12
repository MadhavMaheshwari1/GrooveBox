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
  const [isOpen, setIsOpen] = useState(false);
  const { theme } = useContext(ThemeContext);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const clearSearch = () => {
    setSearchTerm('');
  }

  return (
    <div className="max-w-[1880px] mx-auto md:block flex gap-8 px-6">
      <div className="md:w-1/2 w-[30%]">
        <button
          className={`py-4 md:text-2xl md:hidden text-xl ${theme === 'dark' ? 'text-white' : 'text-black'}  ml-8 transition-all duration-500 flex`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <FaBars />
        </button>
        <Drawer isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
      <div className="flex md:justify-between justify-end md:w-[calc(100%-23rem)] w-[100%]  md:ml-[23rem]">
        <div className={`relative md:flex hidden items-center w-[80%] ${theme === 'dark' ? 'bg-[rgba(35,39,44,255)]' : 'bg-orange-300'} rounded-full px-4 py-2`}>
          <button>
            <SearchIcon />
          </button>
          <input
            type="search"
            name="search"
            placeholder="Search for a song"
            id="search"
            value={searchTerm}
            onChange={handleSearchChange}
            className="bg-transparent placeholder-[#98989c] placeholder:text-lg py-2 px-2 w-full focus:outline-none"
          />
          {searchTerm && (
            <button onClick={clearSearch} className="absolute right-4 text-white">
              <CancelIcon />
            </button>
          )}
        </div>
        <div className="flex gap-8 items-center">
          <button className="md:hidden block"><SearchIcon /></button>
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