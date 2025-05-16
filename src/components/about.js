export default function About() {
  return (
    <section className="w-full bg-white text-green-900 py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
        
        {/* Left text content */}
        <div className="md:w-1/2">
          <h2 className="text-4xl font-bold mb-6">About Imprenditore</h2>
          <p className="text-gray-900 leading-relaxed mb-8">
            IMPRENDITORE, the annual flagship event hosted by E-Cell RGPV, returns for its fourth edition
            with a powerful focus on sustainability. This extravaganza is meticulously designed to ignite
            the ecological innovation spark within students while providing practical pathways to sustainable development.
          </p>
          <button className="bg-green-600 hover:bg-green-500 text-white px-6 py-3 rounded-md font-medium">
            More About Us
          </button>
        </div>

        {/* Right images */}
        <div className="md:w-1/2 flex flex-col items-center md:items-end gap-6">
          <img
            src="/images/speaker1.jpg"
            alt="Speaker on stage"
            className="rounded-xl shadow-lg w-72 md:w-80"
          />
          <img
            src="/images/fire_performance.jpg"
            alt="Fire performer"
            className="rounded-xl shadow-lg w-64 md:w-72 -mt-6 md:-mt-10"
          />
        </div>
      </div>
    </section>
  );
}
