'use client';
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Header() {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  return (
    <header className="bg-green-950 text-white px-6 py-4 shadow-md fixed w-full z-50">
      <div className="flex justify-evenly items-center max-w-7xl mx-auto">
 
        <div className="font-bold text-xl">IMPRENDITORE</div>

        
        <nav className="hidden md:flex space-x-8">
          <a href="#home" className="hover:text-green-300">Home</a>
          <a href="#about" className="hover:text-green-300">About</a>
          <a href="#events" className="hover:text-green-300">Events</a>
          <button className="bg-green-600 hover:bg-green-500 text-white px-6 py-2 rounded-md font-medium">
            Register Now
          </button>
        </nav>

        <div className="md:hidden">
          <button onClick={toggleNav}>
            {navOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>


      {navOpen && (
        <div className="md:hidden bg-green-950 text-white px-6 py-4 space-y-3">
          <a href="#home" className="block hover:text-green-300">Home</a>
          <a href="#about" className="block hover:text-green-300">About</a>
          <a href="#events" className="block hover:text-green-300">Events</a>
          <button className="bg-green-600 hover:bg-green-500 text-white px-6 py-2 rounded-md font-medium">
            Register Now
          </button>
          
          
        </div>
      )}
    </header>
  );
}
