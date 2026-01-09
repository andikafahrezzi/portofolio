import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import Hero from "../sections/Hero";
import About from "../sections/About";
import Projects from "../sections/Project";
import Contact from "../sections/Contact";

export default function Home() {
  return (
    <div className="bg-slate-950 text-white">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
