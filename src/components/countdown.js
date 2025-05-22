'use client';
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Countdown = ({ isMobile = false }) => {
  const calculateTimeLeft = () => {
    const eventDate = new Date("2025-05-28T00:00:00");
    const now = new Date();
    const difference = eventDate - now;

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(2, "0"),
        hours: String(Math.floor((difference / (1000 * 60 * 60)) % 24)).padStart(2, "0"),
        minutes: String(Math.floor((difference / 1000 / 60) % 60)).padStart(2, "0"),
        seconds: String(Math.floor((difference / 1000) % 60)).padStart(2, "0"),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const boxVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  // 🎯 This class decides where it's visible
  const visibilityClass = isMobile ? 'flex md:hidden' : 'hidden md:flex';

  return (
    <div className={`${visibilityClass} justify-center items-center lg:gap-12 gap-6 py-8 px-5 mt-4 overflow-hidden sm:px-4  flex-nowrap overflow-x-auto`}>
      {Object.entries(timeLeft).map(([label, value]) => (
        <motion.div
          key={label}
          className="bg-white/10 rounded-xl lg:px-16 sm:px-4 py-4 lg:py-12 text-center shadow-md min-w-[60px] sm:min-w-[70px] border border-white/40 backdrop-blur-sm ring-1 ring-white/30"
          variants={boxVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="text-2xl sm:text-xl md:text-4xl lg:text-5xl font-extrabold text-white">{value}</p>
          <p className="text-[10px] sm:text-xs md:text-sm lg:text-md text-white font-semibold uppercase mt-1">{label}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default Countdown;
