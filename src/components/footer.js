'use client';
import { FaInstagram, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-green-950 text-white py-6 px-4">
      <div className="flex justify-between items-center flex-wrap gap-4">
       
        <div className="flex items-center space-x-2">
          <img src="/logo.png" alt="Imprenditore Logo" className="h-6" />
          <span className="font-bold text-lg tracking-wider">IMPRENDITORE</span>
        </div>

     
        <div className="flex space-x-4">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white rounded-full p-2 hover:bg-white hover:text-green-900 transition"
          >
            <FaInstagram />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white rounded-full p-2 hover:bg-white hover:text-green-900 transition"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white rounded-full p-2 hover:bg-white hover:text-green-900 transition"
          >
            <FaXTwitter />
          </a>
        </div>
      </div>

      <hr className="my-4 border-green-700" />

     
      <p className="text-center text-sm text-gray-300">
        Copyright © Ecellrgpv All Rights Reserved
      </p>
    </footer>
  );
}
