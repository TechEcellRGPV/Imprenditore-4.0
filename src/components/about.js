export default function About() {
  return (
    <section id="about" className="w-full bg-white text-green-900 py-24 px-6 md:px-16 font-sans">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* Left Content */}
        <div className="md:w-1/2 space-y-6 text-center md:text-left">
          <h2 className="text-4xl sm:text-5xl font-bold font-serif text-green-800 leading-tight">
            About <span className="text-green-600">Imprenditore</span>
          </h2>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
            IMPRENDITORE, the annual flagship event hosted by E-Cell RGPV, returns for its fourth edition
            with a powerful focus on sustainability. This extravaganza is designed to ignite ecological innovation in students
            and offer practical pathways to sustainable development.
          </p>
          <button className="bg-green-600 hover:bg-green-500 text-white px-6 py-3 rounded-md font-medium transition duration-300">
            More About Us
          </button>
        </div>

        {/* Right Image Composition */}
        <div className="md:w-1/2 relative flex items-center justify-center">
          {/* Main Image */}
          <img
            src="/images/about1.png"
            alt="Speaker on stage"
            className="rounded-2xl shadow-xl w-64 sm:w-72 md:w-80 z-10"
          />
          {/* Floating Secondary Image */}
          <img
            src="/images/about2.png"
            alt="Fire performer"
            className="rounded-xl shadow-md w-40 sm:w-48 md:w-56 absolute bottom-[-20px] right-[-20px] transform rotate-3 z-0"
          />
        </div>
      </div>
    </section>
  );
}
