import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Stack from "./components/sections/Stack";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";
import { useReveal } from "./hooks/useReveal";

export default function App() {
  useReveal();

  return (
    <>
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
