'use client';
import React, { useRef, useEffect } from "react";
import { CalendarDays, Clock, MapPin } from "lucide-react";
import { motion, useAnimation, useInView } from "framer-motion";

const events = [
  {
    name: "Seeds of Change",
    time: "10:30 AM - 12:00 AM",
    venue: "RGPV Conference Hall",
    image: "/images/event1.png",
  },
  {
    name: "Voices of Impact",
    time: "12:00 AM - 01:00 PM",
    venue: "RGPV Conference Hall",
    image: "/images/event2.png",
  },
  {
    name: "Stock Market Simulation",
    time: "12:00 PM - 04:00 PM",
    venue: "RGPV Conference Hall",
    image: "/images/event3.png",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.1,
    },
  },
};

const eventVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const buttonVariants = {
  rest: { scale: 1, backgroundColor: "#29754E" },
  hover: { scale: 1.05, backgroundColor: "#256B47", transition: { duration: 0.3 } },
  tap: { scale: 0.95 },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

const EventSchedule = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { margin: "-100px 0px -100px 0px" });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [inView, controls]);

  return (
    <section
      ref={ref}
      className="bg-[#073218] text-white px-6 sm:px-4 lg:py-16 pt-4 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        <div className="backdrop-blur-md shadow-lg rounded-2xl p-6 sm:p-6 lg:p-10 transition-all duration-300 ease-in-out">

          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            animate={controls}
            variants={{
              hidden: { opacity: 0, y: -30 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.8 },
              },
            }}
            className="lg:text-5xl text-4xl font-bold mb-8 text-center sm:text-left text-white"
          >
            Event Schedule
          </motion.h2>

          <motion.div
  initial={{ opacity: 0, x: -20 }}
  animate={controls}
  variants={{
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  }}
  className="flex items-center justify-center md:justify-start gap-3 bg-[#29754E] hover:bg-[#256B47] text-white rounded-md lg:text-md px-4 py-2 w-fit mb-10 mx-auto md:mx-0 text-center md:text-left"
>
  <CalendarDays size={20} />
  <p className="font-medium">Wednesday, May 28, 2025</p>
</motion.div>


          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            className="grid md:grid-cols-2 gap-8 items-start"
          >
            <div className="flex flex-col gap-6">
              {events.map((event, index) => (
                <motion.div
                  key={index}
                  variants={eventVariants}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex gap-3 bg-white/5 border border-white/20 backdrop-blur-lg p-4 sm:p-5 rounded-xl shadow-lg transition-all duration-300"
                >
                  <div className="w-16 h-20 bg-white rounded-md overflow-hidden shrink-0 shadow-md">
                    <img
                      src={event.image}
                      alt={event.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col justify-between gap-1">
                    <h3 className="text-lg font-semibold text-white">{event.name}</h3>

                    <p className="flex items-center text-sm bg-[#256B47]/20 px-2 py-1 rounded-md text-[#A0F5C3] font-medium w-fit">
                      <Clock size={16} className="mr-2 text-[#A0F5C3]" />
                      {event.time}
                    </p>
                    <p className="flex items-center text-sm bg-[#4CAF50]/20 px-2 py-1 rounded-md text-[#C2FFD5] font-medium w-fit">
                      <MapPin size={16} className="mr-2 text-[#C2FFD5]" />
                      {event.venue}
                    </p>
                  </div>
                </motion.div>
              ))}

              <motion.button
                variants={buttonVariants}
                initial="rest"
                animate={controls}
                whileHover="hover"
                whileTap="tap"
                className="relative overflow-hidden group px-6 py-2 rounded-md font-semibold 
                  text-[#e2f9ed] border border-[#29754E] bg-transparent shadow-md 
                  transition-all duration-300 ease-in-out 
                  hover:bg-[#29754E] hover:text-white 
                  hover:shadow-[0_0_16px_rgba(41,117,78,0.6)] mt-4"
              >
                <span className="relative z-10">View All Events</span>
                <span
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent 
                  translate-x-[-100%] group-hover:translate-x-[100%] 
                  transition-transform duration-700 ease-in-out pointer-events-none"
                />
              </motion.button>
            </div>

            <motion.div
              variants={imageVariants}
              initial="hidden"
              animate={controls}
              className="w-full h-full hidden sm:block"
            >
              <img
                src="/images/timeline.png"
                alt="Event"
                className="w-full h-120 object-cover rounded-xl shadow-lg"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EventSchedule;
