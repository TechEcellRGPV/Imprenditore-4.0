"use client";

import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

const speakers = [
  {
    name: "Ava Thompson",
    bio: "Expert in AI and Ethics.",
    image:
      "https://media.istockphoto.com/id/520959651/photo/businessman-presenting-to-an-audience.webp?a=1&b=1&s=612x612&w=0&k=20&c=6xqsjS4USeMJ8BsORs9b66wc9iy8LCUsl-EaKyhMCI8=",
    socials: {
      linkedin: "#",
      github: "#",
      twitter: "#",
    },
  },
  {
    name: "Ravi Mehta",
    bio: "Founder of FutureTech.",
    image:
      "https://images.unsplash.com/photo-1636368087032-b45e9d9d08b2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dg",
    socials: {
      linkedin: "#",
      github: "#",
      twitter: "#",
    },
  },
];

export default function SpeakersSection() {
  return (
    <section id="speakers" className="bg-gradient-to-br from-white to-green-50 py-12 px-6 sm:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <h2 className="lg:text-5xl text-4xl font-bold lg:text-left text-center text-[#29754E]">
            Our Speakers
          </h2>

        </motion.div>

        {/* Speaker Cards */}
        <div className="grid gap-12 sm:grid-cols-2 md:grid-cols-3">
          {speakers.map((speaker, index) => (
            <motion.div
              key={index}
              className="relative group rounded-tl-4xl bg-white shadow-md overflow-hidden transition-all duration-500"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              {/* Image with zoom on hover */}
              <div className="relative h-72 overflow-hidden">
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Overlay info */}
                <div className="absolute inset-0 bg-black/50 flex flex-col justify-end opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-500 p-4">
                  <h3 className="text-white text-2xl font-semibold">{speaker.name}</h3>
                  <p className="text-gray-100 text-sm mt-1">{speaker.bio}</p>

                  {/* Social Icons with animation */}
                  <div className="flex space-x-4 mt-3">
                    {[
                      { icon: <FaLinkedin size={20} />, url: speaker.socials.linkedin },
                      { icon: <FaGithub size={20} />, url: speaker.socials.github },
                      { icon: <FaTwitter size={20} />, url: speaker.socials.twitter },
                    ].map((social, i) => (
                      <motion.a
                        key={i}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white"
                        whileHover={{ scale: 1.3, rotate: 8 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        {social.icon}
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

          ))}
        </div>
      </div>
    </section>
  );
}
