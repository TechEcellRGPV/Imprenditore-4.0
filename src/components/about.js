'use client';

import React from "react";
import { useRouter } from "next/navigation";

export default function About() {
  const router = useRouter();

  return (
    <section id="about" className="w-full bg-white text-green-900 py-24 px-6 md:px-16 font-sans">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-16">
        <div className="md:w-1/2 space-y-6 text-center md:text-left">
          <h2 className="lg:text-5xl text-2xl  sm:text-4xl font-bold font-serif text-green-800 leading-tight">
            About <span className="text-green-600">Imprenditore</span>
          </h2>
          <p className="text-[#29754E] text-base lg:text-2xl sm:text-lg leading-relaxed">
            IMPRENDITORE, the annual flagship event hosted by E-Cell RGPV, returns for its fourth edition
            with a powerful focus on sustainability. This extravaganza is designed to ignite ecological innovation in students
            and offer practical pathways to sustainable development.
          </p>
          <button
  onClick={() => router.push("admin/more")}
  className="bg-[#29754E] hover:bg-[#256B47] text-white px-8 py-4 my-6 rounded-md font-medium transition duration-300"
>
  More About Us
</button>

        </div>

        <div className="md:w-1/2 relative flex items-center justify-center">
          <img
            src="/images/about1.png"
            alt="Speaker on stage"
            className="rounded-2xl shadow-xl w-64 sm:w-72 md:w-80 z-10"
          />
          <img
            src="/images/about2.png"
            alt="Fire performer"
            className="rounded-xl shadow-md w-40 sm:w-48 md:w-56 absolute bottom-[-20px] right-[-20px] transform rotate-3 z-0"
          />
        </div>
      </div>
    </section>
  );
}
