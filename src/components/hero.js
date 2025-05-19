"use client";
export default function Hero() {
  return (
    <section className="bg-[#073218] text-white px-6 pt-37 sm:pt-60 pb-30">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-end justify-between gap-12">

       
        <div className="md:w-2/3 text-4xl text-center sm:text-5xl lg:text-6xl font-bold tracking-wide leading-tight sm:text-left md:text-left">
         <span className="block">IMPRENDITORE 4.O</span>
          
        </div>

       
        <div className="md:w-1/2 text-center md:text-left">
          <p className="text-sm sm:text-base lg:text-xl font-mono text-white mb-4">
            May 28, 2025 | RGPV Campus
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold leading-snug mb-6">
            SUSTAINABILITY UNEARTHED: <br />
            <span className="text-green-300">Innovate Today, Sustain Tomorrow</span>
          </h2>
          <p className="text-gray-300 text-base sm:text-lg lg:text-xl mb-8 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc molestie lacus eget sapien placerat, id aliquet purus gravida.
          </p>
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <button onClick={()=>{window.location.href=("/register")}} className="bg-[#29754E] hover:bg-[#256B47] text-white px-6 py-3 cursor-pointer rounded-lg font-semibold shadow-md transition">
              Register Now
            </button>
            <button onClick={()=>{window.location.href=("/events")}} className="border border-green-500 hover:bg-[#29754E] text-white cursor-pointer px-6 py-3 rounded-lg font-semibold transition">
              See Schedule
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
