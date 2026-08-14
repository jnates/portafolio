import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Stack from "./components/sections/Stack";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";
import BackgroundLines from "./components/ui/BackgroundLines";
import { useReveal } from "./hooks/useReveal";
import { useInteractions } from "./hooks/useInteractions";

export default function App() {
  useReveal();
  useInteractions();

  return (
    <>
      <BackgroundLines />
      <div className="scroll-progress" id="scrollProgress" />
      <div className="spotlight" aria-hidden="true" />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Stack />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
