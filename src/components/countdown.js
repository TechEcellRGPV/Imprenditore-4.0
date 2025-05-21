'use client';
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Countdown = () => {
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

  return (
    <div className="flex justify-center items-center gap-6 sm:gap-8 py-12 px-5 overflow-hidden sm:px-4 bg-[#073218] flex-wrap overflow-x-hidden">
      {Object.entries(timeLeft).map(([label, value]) => (
        <motion.div
          key={label}
          className="bg-white rounded-2xl px-6 sm:px-8 py-6 text-center shadow-md min-w-[90px] sm:min-w-[120px]"
          variants={boxVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="text-2xl font-extrabold text-black">{value}</p>
          <p className="text-gray-500 font-semibold uppercase text-xs mt-1">{label}</p>
        </motion.div>
      ))}
    </div>
  );
};

// return (
//   <div className="flex justify-center items-center gap-6 sm:gap-8 py-10 px-6 sm:px-8 bg-[#073218] flex-nowrap overflow-x-hidden">
//     {Object.entries(timeLeft).map(([label, value]) => (
//       <motion.div
//         key={label}
//         className="bg-white rounded-2xl px-6 sm:px-8 py-6 text-center shadow-lg min-w-[90px] sm:min-w-[120px]"
//         variants={boxVariants}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: false, amount: 0.5 }}
//         transition={{ duration: 0.6, ease: "easeOut" }}
//       >
//         <p className="text-3xl sm:text-4xl font-extrabold text-black">{value}</p>
//         <p className="text-gray-500 font-semibold uppercase text-sm sm:text-base mt-2">{label}</p>
//       </motion.div>
//     ))}
//   </div>
// );

export default Countdown;
