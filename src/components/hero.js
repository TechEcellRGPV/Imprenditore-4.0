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
      className="relative text-white bg-cover bg-center h-screen flex flex-col overflow-hidden"
      style={{
        backgroundImage: "url('/hero-bg.png')",
      }}
    >
      <div className="absolute inset-0 bg-black/40 z-0"></div>

      <header className="relative z-20 w-full px-6 py-4 sm:py-6">
        {" "}
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex-shrink-0">
            <button onClick={() => (window.location.href = "/")}>
              <img
                src="/images/logo.png"
                alt="Imprenditore Logo"
                className="h-12 w-auto sm:h-14"
              />
            </button>
          </div>

          <nav className="hidden md:flex space-x-8 text-lg font-medium">
            <a
              href="#about"
              className="hover:text-green-300 transition-colors duration-300"
            >
              About
            </a>
            <a
              href="/events"
              className="hover:text-green-300 transition-colors duration-300"
            >
              Events
            </a>
            <a
              href="#speakers"
              className="hover:text-green-300 transition-colors duration-300"
            >
              Speakers
            </a>
            <a
              href="#contact"
              className="hover:text-green-300 transition-colors duration-300"
            >
              Contact Us
            </a>
          </nav>










          {/* Register Button */}
          <div className="hidden md:block">
            <button
              onClick={() => (window.location.href = "/register")}
              className="bg-[#29754E] hover:bg-[#256B47] text-white px-6 py-2.5 rounded-md font-semibold text-lg transition-colors duration-300"
            >
              Register Now
            </button>
          </div>

          <div className="md:hidden">
            <button onClick={toggleNav}>
              {navOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
            </button>
          </div>
        </div>
        {navOpen && (
          <div
            className="
              md:hidden
              bg-[#073218]
              text-white
              px-6
              py-6
              space-y-4
              rounded-md
              absolute
              top-full
              left-0
              w-full
              z-30 {/* Lowered z-index for the menu so content below isn't obscured incorrectly */}
              shadow-lg
            "
          >
            <a
              href="/"
              className="block hover:text-green-300 text-lg py-2 transition-colors duration-300"
            >
              Home
            </a>
            <a
              href="#about"
              className="block hover:text-green-300 text-lg py-2 transition-colors duration-300"
            >
              About
            </a>
            <a
              href="/events"
              className="block hover:text-green-300 text-lg py-2 transition-colors duration-300"
            >
              Events
            </a>
            <a
              href="/speakers"
              className="block hover:text-green-300 text-lg py-2 transition-colors duration-300"
            >
              Speakers
            </a>
            <a
              href="#contact"
              className="block hover:text-green-300 text-lg py-2 transition-colors duration-300"
            >
              Contact Us
            </a>
            <button
              onClick={() => (window.location.href = "/register")}
              className="bg-[#29754E] hover:bg-[#256B47] text-white w-full px-6 py-3 rounded-md font-semibold text-lg transition-colors duration-300 mt-4"
            >
              Register Now
            </button>
          </div>
        )}
      </header>

      <div className="absolute inset-x-0 bottom-0 top-16 sm:top-20 flex flex-col items-center justify-center px-4 text-center z-10 pb-16">
        {" "}
        {/* Changed positioning for hero content */}
        <h1 className="w-full text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold mb-4 tracking-widest text-center drop-shadow-lg">
          IMPRENDITORE 4.O
        </h1>
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold leading-tight drop-shadow-md">
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
