"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function About() {
  const router = useRouter();

  return (
    <section
      id="about"
      className="w-full bg-white text-green-900 py-24 px-6 md:px-16  pb:25 font-sans"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-16">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
          className="md:w-1/2 space-y-6 text-center md:text-left"
        >
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: false, amount: 0.3 }}
            className="lg:text-5xl text-2xl sm:text-4xl font-bold font-serif text-green-800 leading-tight"
          >
            About <span className="text-green-600">Imprenditore</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: false, amount: 0.3 }}
            className="text-[#29754E] text-base lg:text-2xl sm:text-lg leading-relaxed"
          >
            IMPRENDITORE, the annual flagship event hosted by E-Cell RGPV,
            returns for its fourth edition with a powerful focus on
            sustainability. This extravaganza is designed to ignite ecological
            innovation in students and offer practical pathways to sustainable
            development.
          </motion.p>
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: false, amount: 0.3 }}
            onClick={() => router.push("admin/more")}
            className="bg-[#29754E] hover:bg-[#256B47] text-white px-8 py-4 my-6 rounded-md font-medium transition duration-300"
          >
            More About Us
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
          className="md:w-1/2 relative bottom-[4vmax] flex items-center justify-center"
        >
          <motion.img
            src="/images/about1.png"
            alt="Speaker on stage"
            className="rounded-2xl shadow-xl w-54 sm:w-62 md:w-60 z-0"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: false, amount: 0.3 }}
          />
          <motion.img
            src="/images/about2.png"
            alt="Fire performer"
            className="rounded-xl shadow-md w-54 sm:w-62 md:w-60  absolute bottom-[-15vmax] right-[-5vmax] sm:bottom-[-10vmax] sm:right-[2vmax] transform z-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: false, amount: 0.3 }}
          />
        </motion.div>
      </div>
    </section>
  );
}
