"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const galleryImages = [
  "/images/img1.jpg",
  "/images/img2.png",
  "/images/img3.jpg",
  "/images/img4.jpg",
  "/images/img6.jpg",
  "/images/img7.jpg",
  "/images/img8.jpg",
  "/images/img9.jpg",
  "/images/img10.jpg",
  "/images/img11.jpg",
  "/images/img12.jpg",
  "/images/img13.jpg",
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 40 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export default function GallerySection() {
  const [visibleImages, setVisibleImages] = useState(8);

  // Function to handle load more (if needed)
  const handleLoadMore = () => {
    setVisibleImages((prev) => prev + 4);
  };

  return (
    <section className="bg-[#073218] py-12 px-6 sm:px-12 md:px-16">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true, amount: 0.3 }}
        className="text-5xl font-bold text-white mb-10 text-center"
      >
        Gallery
      </motion.h2>

      <motion.div
        className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {galleryImages.slice(0, visibleImages).map((src, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="break-inside-avoid overflow-hidden rounded-xl backdrop-blur-md bg-white/5 border border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_12px_40px_rgba(0,255,170,0.3)] hover:border-white/20"
          >
            <img
              src={src}
              alt={`Gallery image ${index + 1}`}
              className="w-full object-cover rounded-xl transition-transform duration-300 hover:rotate-[1deg]"
            />
          </motion.div>
        ))}
      </motion.div>

      
    </section>
  );
}
