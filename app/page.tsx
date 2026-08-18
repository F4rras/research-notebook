import Background from "@/components/effects/Background";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import CurrentFocus from "@/components/sections/CurrentFocus/CurrentFocus";
import FeaturedResearch from "@/components/sections/FeaturedResearch/FeaturedResearch";
import LatestNotes from "@/components/sections/LatestNotes/LatestNotes";
import About from "@/components/sections/About/About";
import FeaturedProjects from "@/components/sections/FeaturedProjects/FeaturedProjects";

export default function Home() {
  return (
    <>
      <Background />
      <Navbar />

      <main className="relative z-10">
        <Hero />
        <FeaturedResearch />
        <FeaturedProjects />
        <LatestNotes />
        <CurrentFocus />
        <About />
      </main>
    </>
  );
}