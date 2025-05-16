import Image from "next/image";
import Header from "../components/header.js";
import Hero from "../components/hero.js";
import About from "../components/about.js";
import Countdown from "../components/countdown.js";
import EventSchedule from "../components/eventSchedule.js";
import Footer from "../components/footer.js";
import SpeakersSection from "../components/speaker.js";
import GallerySection from "../components/gallery.js";
export default function Home() {
  return (
    <div className="min-h-screen w-full bg-green-950 text-white font-[family-name:var(--font-geist-sans)]">
      <Header />
      <Hero/>
      <About />
      <Countdown />
      <EventSchedule/>
      <SpeakersSection />
      <GallerySection />
      <Footer />
    </div>
  );
}
