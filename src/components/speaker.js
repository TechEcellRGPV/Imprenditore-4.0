const speakers = [
  {
    name: "Speaker Name",
    bio: "Expert in AI and Ethics.",
    image:
      "https://media.istockphoto.com/id/520959651/photo/businessman-presenting-to-an-audience.webp?a=1&b=1&s=612x612&w=0&k=20&c=6xqsjS4USeMJ8BsORs9b66wc9iy8LCUsl-EaKyhMCI8=",
  },
  {
    name: "Speaker Name",
    bio: "Founder of FutureTech.",
    image:
      "https://images.unsplash.com/photo-1636368087032-b45e9d9d08b2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dg",
  },
];

export default function SpeakersSection() {
  return (
    <div
      id="speakers"
      className="bg-gradient-to-br from-white to-green-50 py-20 px-6"
    >
      <h2 className="lg:text-5xl lg:ml-24 text-3xl text-center sm:text-left  font-bold text-green-900 mb-20">
        Speakers
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {speakers.map((speaker, index) => (
          <div key={index} className="text-center">
            <img
              src={speaker.image}
              alt={speaker.name}
              className={`w-72 h-72 object-cover mx-auto ${
                index === 0 ? "rounded-tl-[40px]" : "rounded-tl-[40px]"
              }`}
            />
            <h3 className="mt-6 text-2xl sm:text-4xl text-[#004B0E]">
              {speaker.name}
            </h3>
            <p className=" text-xl sm:text-2xl text-gray-600">{speaker.bio}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
