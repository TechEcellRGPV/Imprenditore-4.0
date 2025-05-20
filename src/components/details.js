"use client";

export default function Details() {
  return (
    <section className="min-h-screen flex flex-col lg:flex-row">
      {/* Left Side - Image */}
      <div className="w-full lg:w-1/2">
        <img
          src="/images/group.png"
          alt="Group"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Side - Text Content */}
      <div className="w-full lg:w-1/2 bg-green-950 text-white flex items-center px-6 py-10 lg:px-10">
        <div className="text-center lg:text-left">
          <p className="text-sm sm:text-lg font-bold uppercase tracking-wider text-white mb-6">
            May 28, 2025 | RGPV Campus
          </p>

          <h2 className="lg:text-6xl sm:text-4xl font-bold mb-4">
            SUSTAINABILITY UNEARTHED:<br />
            <span className="text-white lg:text-5xl">Innovate Today,<br className="hidden sm:block" /> Sustain Tomorrow</span>
          </h2>

          <p className="text-base lg:text-2xl py-4 sm:text-lg text-gray-300 mb-6 mt-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            molestie lacus eget sapien placerat, id aliquet purus gravida.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start">
            <button
              onClick={() => (window.location.href = "/register")}
              className="bg-[#29754E] hover:bg-[#256B47] text-white px-6 py-2 rounded-md font-semibold"
            >
              Register Now
            </button>
            <button className="border border-white hover:bg-white hover:text-green-900 px-6 py-2 rounded-md font-semibold">
              See Schedule
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
