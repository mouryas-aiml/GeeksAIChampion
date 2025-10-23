import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false);
    }
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-logo" onClick={() => scrollToSection('home')}>
          <span className="logo-text">HACKATHON</span>
          <span className="logo-year">2025</span>
        </div>
        
        <div className={`navbar-menu ${menuOpen ? 'active' : ''}`}>
          <a onClick={() => scrollToSection('home')}>Home</a>
          <a onClick={() => scrollToSection('about')}>About</a>
          <a onClick={() => scrollToSection('tracks')}>Tracks</a>
          <a onClick={() => scrollToSection('sponsors')}>Sponsors</a>
          <a onClick={() => scrollToSection('timeline')}>Schedule</a>
          <a onClick={() => scrollToSection('team')}>Team</a>
          <a onClick={() => scrollToSection('register')}>Register</a>
          <a onClick={() => scrollToSection('contact')}>Contact Us</a>
        </div>

        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
