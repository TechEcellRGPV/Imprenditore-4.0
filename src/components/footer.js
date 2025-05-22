'use client';
import { FaInstagram, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-[#073218] text-white py-6 px-4">
      <div className="flex flex-col sm:flex-row items-center sm:items-start justify-center sm:justify-between w-full text-center sm:text-left">

        <div className="flex items-center sm:pl-12 justify-center space-x-3">
          <img
            src="/images/logo.svg"
            alt="Imprenditore Logo"
            className="h-10 w-10"
          />
          <span className="text-white text-lg font-semibold">IMPRENDITORE</span>
        </div>


        <div className="flex justify-center sm:pr-12 space-x-4 mt-4 sm:mt-0">
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
