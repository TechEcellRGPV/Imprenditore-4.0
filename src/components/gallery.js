'use client';
import React from "react";

const galleryImages = [
  "images/img1.jpg",
  "images/img2.png",
  "images/img3.jpg",
  "images/img4.jpg",
  "images/img6.png",
  "images/img7.jpg",
  "images/img8.jpg",
  "images/img9.jpg",
  "images/img10.jpg",
];

export default function GallerySection() {
  return (
    <section className="bg-[#073218] py-10 px-4">
      <h2 className="text-5xl font-bold text-green-400 mb-8 text-center">Gallery</h2>

      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
        {galleryImages.map((src, index) => (
          <div key={index} className="break-inside-avoid overflow-hidden rounded-lg shadow-lg">
            <img
              src={src}
              alt={`Gallery image ${index + 1}`}
              className="w-full object-cover rounded-lg hover:scale-[1.02] transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
