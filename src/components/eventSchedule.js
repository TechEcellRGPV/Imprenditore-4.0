'use client';
import React from "react";
import { CalendarDays, Clock, MapPin } from "lucide-react";

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

const EventSchedule = () => {
  return (
    <section className="bg-green-950 text-white px-4 py-16">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl font-bold mb-6 text-left text-green-300">Event Schedule</h2>

        {/* Date */}
        <div className="flex items-center gap-3 bg-green-800 text-white rounded-md px-4 py-2 w-fit mb-10">
          <CalendarDays size={20} />
          <p className="font-medium">Wednesday, May 28, 2025</p>
        </div>

        {/* Main layout */}
        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Left column - Events list */}
          <div className="flex flex-col gap-6">
            {events.map((event, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="w-16 h-16 bg-white rounded-md overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{event.name}</h3>
                  <p className="flex items-center text-sm text-gray-300 mt-1">
                    <Clock size={16} className="mr-2" />
                    {event.time}
                  </p>
                  <p className="flex items-center text-sm text-gray-300">
                    <MapPin size={16} className="mr-2" />
                    {event.venue}
                  </p>
                </div>
              </div>
            ))}

            {/* Button */}
            <button className="mt-4 bg-green-800 hover:bg-green-700 px-4 py-2 rounded text-white w-fit">
              View All Events
            </button>
          </div>

          {/* Right column - Large image */}
          <div className="w-full h-full">
            <img
              src="/images/timeline.png"
              alt="Event"
              className="w-full h-100 object-cover rounded-xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventSchedule;
