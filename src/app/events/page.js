"use client";
import { FaCalendarAlt } from "react-icons/fa";
import Header from "../../components/header";
import Footer from "../../components/footer";
import { useState, useEffect } from "react";

const events = [
  {
    title: "SEEDS OF CHANGE",
    subheading: "Inauguration Ceremony",
    tagline: "Kickstart Your Journey Into Sustainability",
    desc: "Get introduced to the essence of conscious living. The grand inauguration sets the tone for an inspiring day.",
    time: "12:00 PM - 12:15 PM",
    venue: "RGPV Conference Hall",
    image: "/event1.png",
  },
  {
    title: "VOICE OF IMPACT",
    subheading: "Stories That Inspire",
    tagline: "Real Stories, Real Impact",
    desc: "Discover the real-world stories of individuals creating tangible change. Let their journeys ignite your passion.",
    time: "12:15 PM - 12:30 PM",
    venue: "Main Stage",
    image: "/event2.png",
  },
  {
    title: "STORYCART",
    subheading: "Tales of Change",
    tagline: "From Small Steps to Big Impact",
    desc: "Heartwarming tales of small changes leading to big impacts. Get inspired to make your own story.",
    time: "12:15 PM - 12:30 PM",
    venue: "Story Zone",
    image: "/event3.png",
  },
  {
    title: "GREEN AGES",
    subheading: "Generations of Sustainability",
    tagline: "A Journey Through Time",
    desc: "Travel through time to see how sustainability evolved across generations. An engaging, educational ride.",
    time: "12:30 PM - 12:50 PM",
    venue: "Green Pavilion",
    image: "/event4.png",
  },
  {
    title: "SOCIAL MEDIA",
    subheading: "Power & Pitfalls",
    tagline: "The Double-Edged Sword",
    desc: "Explore the dual-edged sword of social media in driving sustainability movements and misinformation.",
    time: "12:50 PM - 01:10 PM",
    venue: "Digital Dome",
    image: "/event5.png",
  },
  {
    title: "2040 AIMS",
    subheading: "Future Forward",
    tagline: "Vision for a Better Tomorrow",
    desc: "What does the future hold? A visual dive into ambitious global goals for 2040 and how we can align.",
    time: "12:50 PM - 01:10 PM",
    venue: "Vision Hall",
    image: "/event6.png",
  },
  {
    title: "START-UP STREET",
    subheading: "Entrepreneurial Pitches",
    tagline: "Innovation Meets Impact",
    desc: "Witness budding entrepreneurs pitch their green solutions. Innovation meets impact in this exciting session.",
    time: "01:10 PM - 01:30 PM",
    venue: "Startup Arena",
    image: "/event7.png",
  },
  {
    title: "SUSTAINABILITY QUIZ",
    subheading: "Interactive Session",
    tagline: "Test Your Green Knowledge",
    desc: "Test your knowledge and challenge your friends in a fun, fast-paced quiz on all things sustainable!",
    time: "01:10 PM - 01:30 PM",
    venue: "Quiz Zone",
    image: "/event8.png",
  },
  {
    title: "Valedictory Session",
    subheading: "Closing Ceremony",
    tagline: "Celebrate Contributions & Impact",
    desc: "Closing ceremony with reflections, gratitude, and awards to honor efforts and participation.",
    time: "01:30 PM - 01:45 PM",
    venue: "Main Hall",
    image: "/event9.png",
  },
];

export default function Events() {
  const [flippedCards, setFlippedCards] = useState({});
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  // Detect if device is touch-enabled on component mount
  useEffect(() => {
    const touchDevice =
      "ontouchstart" in window || navigator.maxTouchPoints > 0;
    setIsTouchDevice(touchDevice);
  }, []);

  const handleCardClick = (index) => {
    if (isTouchDevice) {
      setFlippedCards((prev) => ({
        ...prev,
        [index]: !prev[index],
      }));
    }
  };
  return (
    <>
      <Header />
      <div className="min-h-screen bg-green-950 text-white px-4 py-10">
        <div className="max-w-4xl mx-auto mt-8 md:mt-15">
          <div className="text-center md:text-left mb-8 md:mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-green-300">
              Events
            </h1>
            <div
              className="flex items-center justify-center mt-3 md:mt-5 h-auto w-full md:w-[25vmax] py-3 md:py-4 px-4 rounded-2xl bg-[#29754E] 
              bg-green-30 text-green-100 font-bold text-sm md:text-base"
            >
              <FaCalendarAlt className="mr-2 md:mr-3" />
              <span>Wednesday, May 28th, 2025</span>
            </div>
          </div>

          {/* Mobile Timeline */}
          <div className="md:hidden relative">
            <div className="absolute left-4 top-0 bottom-0 w-1 bg-white"></div>

            <div className="space-y-8">
              {events.map((event, index) => (
                <div key={index} className="relative pl-12 pr-2">
                  {/* Timeline dot */}
                  <div className="absolute left-[14px] transform -translate-x-1/2 w-5 h-5 bg-white rounded-full border-2 border-white z-20 top-5"></div>

                  {/* Horizontal connector line */}
                  <div className="absolute top-5 left-4 w-8 h-0.5 bg-white"></div>

                  {/* Event card */}
                  <div
                    className={`bg-[#001A0A] perspective h-56 px-4 py-3 rounded-2xl shadow-lg text-white
                    w-full font-sans relative transition-transform duration-700 ${
                      isTouchDevice ? "cursor-pointer" : ""
                    }
                    transform-style preserve-3d ${
                      !isTouchDevice ? "hover:rotate-y-180" : ""
                    } ${flippedCards[index] ? "rotate-y-180" : ""}`}
                    onClick={() => handleCardClick(index)}
                  >
                    {/* front */}
                    <div className="absolute inset-0 w-full h-full text-white flex flex-col items-center justify-center backface-hidden">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-full object-cover rounded-2xl"
                      />
                      <div className="absolute bottom-0 w-full bg-[#062A14] bg-opacity-60 p-2 rounded-b-2xl">
                        <h3 className="text-center font-bold text-lg">
                          {event.title}
                        </h3>
                      </div>
                    </div>

                    {/* back */}
                    <div className="absolute inset-0 w-full h-full overflow-auto p-4 rotate-y-180 backface-hidden">
                      <h2 className="text-base font-bold uppercase text-white tracking-wide underline">
                        {event.title}
                      </h2>

                      <p className="uppercase text-green-300 font-semibold text-xs mt-1">
                        {event.subheading}
                      </p>

                      <p className="text-green-400 font-medium text-xs mt-2">
                        {event.tagline}
                      </p>

                      <p className="text-green-100 text-xs mt-2">
                        {event.desc}
                      </p>

                      <p className="mt-2 text-xs font-bold text-white">
                        {event.time}
                      </p>

                      <p className="text-green-300 text-xs">{event.venue}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Desktop Timeline */}
          <div className="hidden md:block relative">
            {/* Vertical center line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-white h-full z-0"></div>

            <div className="space-y-12 relative z-10">
              {events.map((event, index) => {
                const isLeft = index % 2 !== 0;

                return (
                  <div
                    key={index}
                    className={`flex ${
                      isLeft ? "justify-start" : "justify-end"
                    } relative`}
                  >
                    <div
                      className={`w-1/2 relative ${
                        isLeft ? "pr-16 lg:pr-22 pl-4" : "pl-16 lg:pl-22 pr-4"
                      }`}
                    >
                      {/* Horizontal connector line */}
                      <div
                        className={`absolute top-6 w-12 lg:w-[20%] h-0.5 bg-white ${
                          isLeft ? "right-0" : "left-0"
                        }`}
                      ></div>

                      {/* Event box with fixed height/width */}
                      <div
                        className={`bg-[#001A0A] perspective h-56 lg:h-64 px-4 lg:px-6 py-3 lg:py-4 rounded-2xl shadow-lg text-white 
                                    max-w-md font-sans relative w-full transition-transform duration-700 ${
                                      isTouchDevice ? "cursor-pointer" : ""
                                    }
                                    transform-style preserve-3d ${
                                      !isTouchDevice ? "hover:rotate-y-180" : ""
                                    } ${
                          flippedCards[index] ? "rotate-y-180" : ""
                        }`}
                        onClick={() => handleCardClick(index)}
                      >
                        {/* front visuals */}
                        <div className="absolute inset-0 w-full h-full text-white flex flex-col items-center justify-center backface-hidden">
                          <img
                            src={event.image}
                            alt={event.title}
                            className="w-full h-full object-cover rounded-2xl"
                          />
                          <div className="absolute bottom-0 w-full bg-[#062A14] bg-opacity-60 p-2 rounded-b-2xl">
                            <h3 className="text-center font-bold text-lg">
                              {event.title}
                            </h3>
                          </div>
                        </div>

                        {/* back */}
                        <div className="absolute inset-0 w-full h-full overflow-auto p-4 rotate-y-180 backface-hidden">
                          <h2 className="text-base lg:text-lg font-bold uppercase text-white tracking-wide underline">
                            {event.title}
                          </h2>

                          <p className="uppercase text-green-300 font-semibold text-xs lg:text-sm mt-1">
                            {event.subheading}
                          </p>

                          <p className="text-green-400 font-medium text-xs lg:text-sm mt-2">
                            {event.tagline}
                          </p>

                          <p className="text-green-100 text-xs lg:text-sm mt-2">
                            {event.desc}
                          </p>

                          <p className="mt-2 text-xs lg:text-sm font-bold text-white">
                            {event.time}
                          </p>

                          <p className="text-green-300 text-xs lg:text-sm">
                            {event.venue}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Timeline dot */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-5 lg:w-7 h-5 lg:h-7 bg-white rounded-full border-2 border-white z-20 top-6"></div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
