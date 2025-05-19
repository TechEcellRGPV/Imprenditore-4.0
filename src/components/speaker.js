const speakers = [
  {
    name: "Speaker Name",
    bio: "Expert in AI and Ethics.",
    image: "/speaker1.jpg",
  },
  {
    name: "Speaker Name",
    bio: "Founder of FutureTech.",
    image: "/speaker2.jpg",
  },
];

export default function SpeakersSection() {
  return (
    <div id="speakers" className="bg-gradient-to-br from-white to-green-50 py-20 px-6">
      <h2 className="lg:text-5xl lg:ml-24 text-3xl text-center sm:text-left  font-bold text-green-900 mb-20">Speakers</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {speakers.map((speaker, index) => (
          <div key={index} className="text-center">
            <div
              className={`w-72 h-72 bg-gray-300 mx-auto ${
                index === 0 ? "rounded-tl-[40px]" : "rounded-tl-[40px]"
              }`}
            >
              
            </div>
            <h3 className="mt-6 text-2xl sm:text-4xl text-[#004B0E]">{speaker.name}</h3>
            <p className=" text-xl sm:text-2xl text-gray-600">{speaker.bio}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
