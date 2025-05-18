const speakers = [
  {
    name: "PP",
    bio: "Expert in AI and Ethics.",
    image: "/speaker1.jpg",
  },
  {
    name: "PP",
    bio: "Founder of FutureTech.",
    image: "/speaker2.jpg",
  },
];

export default function SpeakersSection() {
  return (
    <div className="bg-gradient-to-br from-white to-green-50 py-10 px-6">
      <h2 className="text-3xl font-bold text-green-900 mb-8">Speakers</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {speakers.map((speaker, index) => (
          <div key={index} className="text-center">
            <div
              className={`w-48 h-48 bg-gray-300 mx-auto ${
                index === 0 ? "rounded-tl-[40px]" : "rounded-tl-[40px]"
              }`}
            >
              
            </div>
            <h3 className="mt-4 text-xl font-semibold text-green-900">{speaker.name}</h3>
            <p className="text-sm text-gray-600">{speaker.bio}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
