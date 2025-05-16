const galleryImages = [
  "/img1.jpg",
  "/img2.jpg",
  "/img3.jpg",
  "/img4.jpg",
  "/img5.jpg",
  "/img6.jpg",
  "/img7.jpg",
  "/img8.jpg",
  "/img9.jpg",
  "/img10.jpg",
  "/img11.jpg",
  "/img12.jpg",
];

export default function GallerySection() {
  return (
    <section className="bg-green-950 py-10 px-4">
      <h2 className="text-3xl font-bold text-white mb-8">Gallery</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {galleryImages.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Gallery ${index + 1}`}
            className="rounded-lg object-cover w-full h-48"
          />
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <button className="bg-white text-green-900 font-medium py-2 px-6 rounded-md hover:bg-green-100 transition">
          View All Gallery
        </button>
      </div>
    </section>
  );
}
