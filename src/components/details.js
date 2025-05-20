"use client";

import { motion } from "framer-motion";

export default function Details() {
  return (
    <section className="min-h-screen flex flex-col lg:flex-row overflow-hidden">
      <motion.div
        className="w-full lg:w-1/2"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <img
          src="/images/group.png"
          alt="Group"
          className="w-full h-full object-cover"
        />
      </motion.div>

      <motion.div
        className="w-full lg:w-1/2 bg-green-950 text-white flex items-center px-6 py-10 lg:px-10"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <div className="text-center lg:text-left">
          <motion.p
            className="text-sm sm:text-lg font-bold uppercase tracking-wider text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            May 28, 2025 | RGPV Campus
          </motion.p>

          <motion.h2
            className="lg:text-6xl sm:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            SUSTAINABILITY UNEARTHED:
            <br />
            <span className="text-white lg:text-5xl">
              Innovate Today,
              <br className="hidden sm:block" /> Sustain Tomorrow
            </span>
          </motion.h2>

          <motion.p
            className="text-base lg:text-2xl py-4 sm:text-lg text-gray-300 mb-6 mt-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            Join us in exploring cutting-edge ideas that drive environmental
            change. Discover how innovation can pave the way to a greener, more
            resilient future.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <button
              onClick={() => (window.location.href = "/register")}
              className="bg-[#29754E] hover:bg-[#256B47] text-white px-6 py-2 rounded-md font-semibold"
            >
              Register Now
            </button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
