'use client';
import { FaInstagram, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-[#073218] text-white py-6 px-4">
      <div className="flex justify-between items-center flex-wrap gap-4">
       
        <div className="flex items-center space-x-2">
          <img src="/images/logo.png" alt="Imprenditore Logo" className="h-10" />
        </div>

     
        <div className="flex space-x-4">
          <a
            href="https://www.instagram.com/ecell_rgpv/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white rounded-full p-2 hover:bg-white hover:text-green-900 transition"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.linkedin.com/company/ecellrgpv/posts/?feedView=all"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white rounded-full p-2 hover:bg-white hover:text-green-900 transition"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://x.com/ecellrgpv"
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
