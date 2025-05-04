import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Projects from './components/Projects';
import Publications from './components/Publications';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ParticlesBackground from './components/ParticlesBackground';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-900 text-white">
        <ParticlesBackground />
        <Navbar />
        <main>
          <Hero />
          <About />
          <Education />
          <Skills />
          <Projects />
          <Publications />
          <Contact />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;