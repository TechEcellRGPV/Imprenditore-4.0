"use client";
import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

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

    return () => {};
  }, [text]);

  return (
    <span className="text-green-300 font-mono mt-[2vmax]" aria-label={text}>
      {displayedText}
    </span>
  );
}

export default function Hero() {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  return (
    <section
      className="relative text-white bg-cover bg-center h-screen flex flex-col overflow-hidden"
      style={{
        backgroundImage: "url('/hero-bg.png')",
      }}
    >
      <div className="absolute inset-0 bg-black/30 z-0"></div>

      <header className="relative z-10 w-full px-6 py-4">
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

          <nav className="hidden md:flex space-x-6">
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
              className="bg-[#29754E] hover:bg-[#256B47] text-white px-5 py-2 rounded-md font-medium"
            >
              Register Now
            </button>
          </div>

          {/* <div className="md:hidden">
            <button onClick={toggleNav}>
              {navOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div> */}
        </div>

       {navOpen && (
  <div
    className="
      md:hidden
      bg-[#073218]
      text-white
      px-6
      py-4
      space-y-4
      rounded-md
      absolute
      top-full
      left-0
      w-full
      z-50
    "
  >
    <a href="/" className="block hover:text-green-300">
      Home
    </a>
    <a href="#about" className="block hover:text-green-300">
      About
    </a>
    <a href="/events" className="block hover:text-green-300">
      Events
    </a>
    <a href="/speakers" className="block hover:text-green-300">
      Speakers
    </a>
    <a href="#contact" className="block hover:text-green-300">
      Contact Us
    </a>
    <button
      onClick={() => (window.location.href = "/register")}
      className="bg-green-600 hover:bg-green-500 text-white w-full px-6 py-2 rounded-md font-medium"
    >
      Register Now
    </button>
  </div>
)}

      </header>

      <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center relative z-10">
        <h1 className="w-full text-3xl sm:text-5xl md:text-6xl lg:text-8xl font-bold mb-6 tracking-widest text-center relative mb-20">
          IMPRENDITORE 4.O
        </h1>

        <h2 className="text-base sm:text-lg md:text-2xl lg:text-3xl xl:text-4xl font-semibold leading-snug">
          SUSTAINABILITY UNEARTHED
          <br />
          <TypingAnimation />
        </h2>
      </div>
    </section>
  );
}
