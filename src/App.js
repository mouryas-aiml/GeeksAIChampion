import React, { useEffect } from 'react';
import './App.css';
import AnimatedBackground from './components/AnimatedBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Timeline from './components/Timeline';
import Tracks from './components/Tracks';
import Prizes from './components/Prizes';
import Sponsors from './components/Sponsors';
import FAQ from './components/FAQ';
import Register from './components/Register';
import Footer from './components/Footer';
import { initScrollAnimations, addScrollAnimationClasses } from './utils/scrollAnimations';

function App() {
  useEffect(() => {
    // Initialize scroll animations after component mounts
    const timer = setTimeout(() => {
      addScrollAnimationClasses();
      initScrollAnimations();
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      <AnimatedBackground />
      <Navbar />
      <Hero />
      <About />
      <Timeline />
      <Tracks />
      <Prizes />
      <Sponsors />
      <FAQ />
      <Register />
      <Footer />
    </div>
  );
}

export default App;
