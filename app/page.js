import Header from "@/components/Header";
import Hero from "@/components/Hero";
import InfoStrip from "@/components/InfoStrip";
import Languages from "@/components/Languages";
import Badges from "@/components/Badges";
import Stack from "@/components/Stack";
import Journey from "@/components/Journey";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <div className="fixed inset-0 -z-10 bg-grain opacity-60 pointer-events-none" aria-hidden="true" />
      <Header />
      <main>
        <Hero />
        <InfoStrip />
        <Languages />
        <Badges />
        <Stack />
        <Journey />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
