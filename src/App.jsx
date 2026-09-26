import { useEffect } from 'react';
import Navigation from './components/Navigation';
import CustomCursor from './components/CustomCursor';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import AppStores from './sections/AppStores';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

function App() {
  // Pre-load logic if needed globally, but handled in CharacterCanvas for the hero
  return (
    <>
      <CustomCursor />
      <Navigation />
      
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <AppStores />
        <Contact />
      </main>
      
      <Footer />
    </>
  );
}

export default App;
