import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import TechStack from './components/TechStack/TechStack';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Experience from './components/Experience/Experience';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import GrainOverlay from './components/GrainOverlay/GrainOverlay';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <TechStack />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
      <GrainOverlay />
    </>
  );
}
