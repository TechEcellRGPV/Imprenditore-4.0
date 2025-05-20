"use client";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Hero() {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  return (
    <section
      className="relative text-white bg-cover bg-center h-screen flex flex-col"
      style={{
        backgroundImage: "url('/hero-bg.png')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30 z-0"></div>

      {/* Header */}
      <header className="relative z-10 w-full px-6 py-4">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button onClick={() => (window.location.href = "/")}>
              <img
                src="/images/logo.png"
                alt="Imprenditore Logo"
                className="h-10 w-auto"
              />
            </button>
          </div>

          {/* Nav links - desktop */}
          <nav className="hidden md:flex space-x-6">
            <a href="#about" className="hover:text-green-300">About</a>
            <a href="/events" className="hover:text-green-300">Events</a>
            <a href="#speakers" className="hover:text-green-300">Speakers</a>
            <a href="#contact" className="hover:text-green-300">Contact Us</a>
          </nav>

          {/* CTA button - desktop */}
          <div className="hidden md:block">
            <button
              onClick={() => (window.location.href = "/register")}
              className="bg-[#29754E] hover:bg-[#256B47] text-white px-5 py-2 rounded-md font-medium"
            >
              Register Now
            </button>
          </div>

          {/* Hamburger - mobile */}
          <div className="md:hidden">
            <button onClick={toggleNav}>
              {navOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {navOpen && (
          <div className="md:hidden bg-[#073218] text-white px-6 py-4 space-y-4 mt-3 rounded-md">
            <a href="/" className="block hover:text-green-300">Home</a>
            <a href="#about" className="block hover:text-green-300">About</a>
            <a href="/events" className="block hover:text-green-300">Events</a>
            <a href="/speakers" className="block hover:text-green-300">Speakers</a>
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
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
          IMPRENDITORE 4.O
        </h1>

        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold leading-snug">
          SUSTAINABILITY UNEARTHED:
          <br />
          <span className="text-green-300">
            Innovate Today, Sustain Tomorrow
          </span>
        </h2>
      </div>
    </section>
  );
}
