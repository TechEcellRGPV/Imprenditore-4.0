'use client';
import React from "react";
import { CalendarDays, Clock, MapPin } from "lucide-react";

const events = [
  {
    name: "Pitch Perfect",
    time: "10:00 AM - 11:00 AM",
    venue: "Main Hall",
    image: "https://via.placeholder.com/60", // Replace with actual image
  },
  {
    name: "Startup Stories",
    time: "11:30 AM - 12:30 PM",
    venue: "Room B",
    image: "https://via.placeholder.com/60",
  },
  {
    name: "Workshop on UI/UX",
    time: "1:00 PM - 2:30 PM",
    venue: "Lab 2",
    image: "https://via.placeholder.com/60",
  },
  {
    name: "Panel Discussion",
    time: "3:00 PM - 4:00 PM",
    venue: "Auditorium",
    image: "https://via.placeholder.com/60",
  },
];

const EventSchedule = () => {
  return (
    <section className="bg-green-950 text-white px-6 py-12">
      <h2 className="text-4xl font-bold mb-6">Event Schedule</h2>

      <div className="flex items-center gap-3 bg-green-800 text-white rounded-md px-4 py-2 w-fit mb-10">
        <CalendarDays size={20} />
        <p className="font-medium">Wednesday, May 28, 2025</p>
      </div>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Left Side - Event List */}
        <div className="flex flex-col gap-6">
          {events.map((event, index) => (
            <div key={index} className="flex gap-4 items-start">
              <img
                src={event.image}
                alt={event.name}
                className="w-16 h-16 bg-white rounded-md object-cover"
              />
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

          <button className="mt-6 bg-green-800 hover:bg-green-700 px-4 py-2 rounded text-white w-fit">
            View All Events
          </button>
        </div>

        {/* Right Side - Event Image */}
        <div>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/3/30/Event_Panel.jpg" // Replace with your hero image
            alt="Event"
            className="w-full h-full object-cover rounded-xl shadow-md"
          />
        </div>
      </div>
    </section>
  );
};

export default EventSchedule;
