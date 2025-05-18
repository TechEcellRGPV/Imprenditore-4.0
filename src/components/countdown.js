'use client';
import React, { useEffect, useState } from "react";

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

  return (
    <div className="flex justify-center items-center gap-4 sm:gap-6 py-8 px-4 bg-green-950 flex-nowrap overflow-x-auto">
      {Object.entries(timeLeft).map(([label, value]) => (
        <div
          key={label}
          className="bg-white rounded-xl px-5 py-4 text-center shadow-md min-w-[80px]"
        >
          <p className="text-2xl font-extrabold text-black">{value}</p>
          <p className="text-gray-500 font-semibold uppercase text-xs mt-1">
            {label}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Countdown;
