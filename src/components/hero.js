export default function Hero() {
  return (
    <section className="bg-green-950 text-white px-6 py-28 md:flex justify-between items-center">
      <div className="text-5xl font-extrabold md:w-1/2 mb-10 md:mb-0">
        IMPRENDITORE 4.0
      </div>
      <div className="md:w-1/2">
        <p className="text-3xl font-semibold mb-2">May 28, 2025 | RGPV Campus</p>
        <h2 className="text-4xl md:text-4xl font-bold leading-tight mb-4">
          SUSTAINABILITY UNEARTHED: <br />
          Innovate Today, Sustain Tomorrow
        </h2>
        <p className="text-gray-300 mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc molestie lacus eget sapien placerat, id aliquet purus gravida.
        </p>
        <div className="flex gap-4">
          <button className="bg-green-600 hover:bg-green-500 text-white px-6 py-2 rounded-md font-medium">
            Register Now
          </button>
          <button className="border border-green-500 hover:bg-green-800 text-white px-6 py-2 rounded-md font-medium">
            See Schedule
          </button>
        </div>
      </div>
    </section>
  );
}
