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
            className="cursor-pointer"
            onClick={() => {
              window.location.href = "/";
            }}
          >
            <img
              src="/images/logo.png"
              alt="Imprenditore Logo"
              className="h-10 w-auto"
            />
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
          <button onClick={()=>{window.location.href=("/register")}} className="bg-[#29754E] hover:bg-[#256B47] text-white px-6 py-2 rounded-md cursor-pointer font-medium">
            Register Now
          </button>
        </div>

       
      </div>

 


    </header>
  );
}
