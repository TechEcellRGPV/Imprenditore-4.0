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
  {
    name: "Green Pages",
    time: "11:30 PM - 05:30 PM",
    venue: "KRC 2nd Floor",
    image: "/images/event4.png",
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
  hidden: { opacity: 0, y: 30 }, // start slightly below and invisible
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
    <section ref={ref} className="bg-[#073218] text-white px-6 sm:px-4 py-16 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: -30 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
          }}
          className="text-5xl font-bold mb-12 text-center sm:text-left text-white-300"
        >
          Event Schedule
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={controls}
          variants={{
            hidden: { opacity: 0, x: -20 },
            visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
          }}
          className="flex items-center gap-3 bg-[#29754E] hover:bg-[#256B47] text-white rounded-md lg:text-md px-4 py-2 w-fit mb-10"
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
          <div className="flex flex-col gap-12">
            {events.map((event, index) => (
              <motion.div
                key={index}
                variants={eventVariants}
                className="flex items-start gap-4"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <div className="w-16 h-24 bg-white rounded-md overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.name}
                    className="w-full h-full object-cover block"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{event.name}</h3>
                  <p className="flex items-center text-sm text-gray-300 my-3">
                    <Clock size={16} className="mr-2" />
                    {event.time}
                  </p>
                  <p className="flex items-center text-sm text-gray-300">
                    <MapPin size={16} className="mr-2" />
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
              className="mt-4 px-4 py-2 rounded text-white w-fit"
              style={{ backgroundColor: "#29754E" }}
            >
              View All Events
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
    </section>
  );
};

export default EventSchedule;