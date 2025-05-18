'use client';
import React, { useState } from "react";

const galleryImages = [
  "images/img1.jpg",
  "images/img2.png",
  "images/img3.jpg",
  "images/img4.jpg",
  // "images/img5.png",
  "images/img6.png",
  "images/img7.jpg",
  "images/img8.jpg",
  "images/img9.jpg",
];

export default function GallerySection() {
  const [showAll, setShowAll] = useState(false);

  const toggleGallery = () => setShowAll((prev) => !prev);

  // Show all or just the first 4
  const visibleImages = showAll ? galleryImages : galleryImages.slice(0, 4);

  return (
    <section className="bg-green-950 py-10 px-4">
      <h2 className="text-3xl font-bold text-white mb-8">Gallery</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {visibleImages.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Gallery ${index + 1}`}
            className="rounded-lg object-cover w-full h-48 transition-all duration-300 ease-in-out"
          />
        ))}
      </div>

      <div className="flex justify-center mt-8">
        <button
          onClick={toggleGallery}
          className="bg-white text-green-900 font-medium py-2 px-6 rounded-md hover:bg-green-100 transition"
        >
          {showAll ? "View Less" : "View All Gallery"}
        </button>
      </div>
    </section>
  );
}
