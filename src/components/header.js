"use client";
import { useState } from "react";

export default function Header() {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  return (
    <header className="bg-green-950 relative text-white px-6 py-4 shadow-md bg-none w-full z-50">
      <div className="relative flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex-shrink-0">
          <button
              onClick={() => (window.location.href = "/")}
              className="flex items-center space-x-3"
            >
              <img
                src="/images/logo.svg"
                alt="Imprenditore Logo"
                className="h-12 w-12 sm:h-14 sm:w-14 animate-spin-slow"
              />
              <span className="text-white text-xl sm:text-2xl font-bold tracking-wide">
                IMPRENDITORE
              </span>
            </button>
        </div>

        <nav className="hidden md:flex absolute left-1/2 -translate-x-1/2 space-x-8">
          <a href="#about" className="hover:text-green-300">
            About
          </a>
          <a href="/events" className="hover:text-green-300">
            Events
          </a>
          <a href="#speakers" className="hover:text-green-300">
            Speakers
          </a>
          <a href="#contact" className="hover:text-green-300">
            Contact Us
          </a>
        </nav>

        <div className="hidden md:block">
            <button
              onClick={() => (window.location.href = "/register")}
              className="bg-[#29754E] text-white px-5 py-2 rounded-md font-medium border border-transparent 
               transition duration-300 ease-in-out
               hover:bg-transparent hover:text-[#eef5f2] 
               hover:border-[#1f3127] hover:shadow-[0_0_12px_rgba(41,117,78,0.8)]"
            >
              Register Now
            </button>
          </div>

       
      </div>

 


    </header>
  );
}
