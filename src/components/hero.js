"use client";
import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Countdown from "./countdown.js";

function TypingAnimation() {
  const text = "Innovate Today, Sustain Tomorrow";
  const [displayedText, setDisplayedText] = useState("I");

  useEffect(() => {
    let i = 1;
    let forward = true;

    const type = () => {
      if (forward) {
        setDisplayedText("I" + text.slice(1, i + 1));
        i++;
        if (i === text.length) {
          forward = false;
          setTimeout(type, 1000);
          return;
        }
      } else {
        if (i > 1) {
          setDisplayedText("I" + text.slice(1, i - 1));
          i--;
        } else {
          forward = true;
          setTimeout(type, 500);
          return;
        }
      }
      setTimeout(type, 100);
    };

    type();
    return () => { };
  }, [text]);

  return (
    <span className="text-green-300 font-mono mt-[2vmax]" aria-label={text}>
      {displayedText}
    </span>
  );
}

export default function Hero() {
  const [navOpen, setNavOpen] = useState(false);
  const toggleNav = () => setNavOpen(!navOpen);

  return (
    <section
      className="relative bg-black/10 text-white bg-cover bg-center lg:h-screen h-full flex flex-col overflow-hidden"
      style={{ backgroundImage: "url('/hero-bg.png')" }}
    >
      {/* Dimmed Background when Nav is open */}
      {navOpen && (
        <div className="absolute inset-0 bg-black/80 z-40 transition-opacity duration-300"></div>
      )}

      {/* Header */}
      <header className="relative z-50 w-full px-6 py-4">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex-shrink-0">
            <button onClick={() => (window.location.href = "/")}>
              <img
                src="/images/logo.png"
                alt="Imprenditore Logo"
                className="h-10 w-auto"
              />
            </button>
          </div>

          {/* Desktop Nav */}
       <nav className="hidden md:flex space-x-6">
  {[
    { href: "#about", label: "About" },
    { href: "/events", label: "Events" },
    { href: "#speakers", label: "Speakers" },
    { href: "#contact", label: "Contact Us" },
  ].map((item, index) => (
    <a
      key={index}
      href={item.href}
      className="relative px-5 py-2 font-medium text-white group transition-colors duration-300"
    >
      <span className="relative z-10 transition duration-300 group-hover:text-[#29754E] ">
        {item.label}
      </span>
      {/* Outline border that animates in */}
      <span className="absolute inset-0 rounded-md border border-[#29754E] opacity-0 scale-0 origin-left transition-all duration-500 group-hover:opacity-100 group-hover:scale-100"></span>
    </a>
  ))}
</nav>










          {/* Register Button */}
          <div className="hidden md:block">
            <button
              onClick={() => (window.location.href = "/register")}
              className="bg-[#29754E] text-white px-5 py-2 rounded-md font-medium border border-transparent 
               transition duration-300 ease-in-out
               hover:bg-transparent hover:text-[#29754E] 
               hover:border-[#1f3127] hover:shadow-[0_0_12px_rgba(41,117,78,0.8)]"
            >
              Register Now
            </button>
          </div>



          {/* Mobile Nav Toggle */}
          <div className="md:hidden z-50">
            <button onClick={toggleNav}>
              {navOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {navOpen && (
          <div className="absolute top-16 right-4 bg-[#073218] text-white px-6 py-4 space-y-4 rounded-md w-[80vw] z-50 shadow-xl transition-all duration-300 ease-in-out">
            <a href="/" className="block hover:text-green-300">Home</a>
            <a href="#about" className="block hover:text-green-300">About</a>
            <a href="/events" className="block hover:text-green-300">Events</a>
            <a href="#speakers" className="block hover:text-green-300">Speakers</a>
            <a href="#contact" className="block hover:text-green-300">Contact Us</a>
            <button
              onClick={() => (window.location.href = "/register")}
              className="bg-green-600 hover:bg-green-500 text-white w-full px-6 py-2 rounded-md font-medium"
            >
              Register Now
            </button>
          </div>
        )}
      </header>

      {/* Hero Content */}
      <div className={`lg:min-h-screen mb-40 flex flex-col items-center justify-center mt-12 px-4 text-center relative z-30 transition-opacity duration-300 ${navOpen ? "opacity-20 pointer-events-none" : "opacity-100"}`}>
        <h1 className="w-full text-3xl sm:text-5xl md:text-6xl lg:text-8xl font-bold mb-3  tracking-widest text-center mb-20">
          IMPRENDITORE 4.O
        </h1>

        <h2 className="text-base sm:text-lg md:text-2xl lg:text-3xl xl:text-4xl font-semibold leading-snug">
          SUSTAINABILITY UNEARTHED
          <br />
          <TypingAnimation />
        </h2>
      </div>

      {/* Countdown (mobile only) */}
      <div className="block md:hidden z-30">
        <Countdown isMobile={true} />
      </div>
    </section>
  );
}
