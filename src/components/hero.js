export default function Hero() {
  return (
    <section className="bg-green-950 text-white px-6 py-28">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* Left Side: Main Logo Title */}
        <div className="md:w-1/2 text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight text-center md:text-left">
          <span className="block">IMPRENDITORE</span>
          <span className="block">4.0</span>
        </div>

        {/* Right Side: Details */}
        <div className="md:w-1/2 text-center md:text-left">
          <p className="text-sm sm:text-base font-mono text-green-200 mb-4">
            May 28, 2025 | RGPV Campus
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-snug mb-6">
            SUSTAINABILITY UNEARTHED: <br />
            <span className="text-green-300">Innovate Today, Sustain Tomorrow</span>
          </h2>
          <p className="text-gray-300 text-sm sm:text-base mb-8 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc molestie lacus eget sapien placerat, id aliquet purus gravida.
          </p>
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <button className="bg-green-600 hover:bg-green-500 text-white px-6 py-3 rounded-lg font-semibold shadow-md transition">
              Register Now
            </button>
            <button className="border border-green-500 hover:bg-green-800 text-white px-6 py-3 rounded-lg font-semibold transition">
              See Schedule
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
