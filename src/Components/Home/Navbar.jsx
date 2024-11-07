import { useState, useContext, useEffect } from "react";
import { FaBars } from "react-icons/fa6";
import RythmixLogo from "../../assets/RythmixLogo.svg";

const Navbar = ({ user }) => {

  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const clearSearch = () => {
    setSearchTerm('');
  }

  return (
    <div className="max-w-[1880px] mx-auto py-4 flex items-center gap-12">
      <div className="h-[95vh] flex flex-col items-center">
        <img src={RythmixLogo} alt="Logo" width="55px" height="55px" className="cursor-pointer" />
        <div className="h-[calc(95vh-60px)] mt-4 w-[120px] bg-[rgb(19,18,19)] rounded-xl flex flex-col items-center py-6">
          <button>
            <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-list-music"><path d="M21 15V6" /><path d="M18.5 18a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" /><path d="M12 12H3" /><path d="M16 6H3" /><path d="M12 18H3" /></svg>
          </button>
        </div>
      </div>
      <div className="">
        <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-house"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" /><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /></svg>
      </div>
    </div>
  )
}

export default Navbar