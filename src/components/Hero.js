import React, { useEffect, useState } from 'react';
import './Hero.css';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 20,
        y: (e.clientY / window.innerHeight) * 20
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToRegister = () => {
    const element = document.getElementById('register');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="grid-overlay"></div>
        <div 
          className="gradient-orb orb-1" 
          style={{ 
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)` 
          }}
        ></div>
        <div 
          className="gradient-orb orb-2" 
          style={{ 
            transform: `translate(${-mousePosition.x}px, ${-mousePosition.y}px)` 
          }}
        ></div>
      </div>

      <div className="hero-content">
        <div className="section-header">
          <span className="section-tag">Registration Open</span>
          <h1 className="section-title">
            <span className="title-line">INNOVATE</span>
            <span className="title-line gradient-text">COLLABORATE</span>
            <span className="title-line">CREATE</span>
          </h1>
          <p className="section-description">
            Join Bengaluru's premier college hackathon for 48 hours of innovation.
            <br />
            Build groundbreaking solutions across AI/ML, IoT, Blockchain, and more.
          </p>
        </div>

        <div className="hero-info">
          <div className="info-item">
            <div className="info-text">
              <span className="info-label">Date</span>
              <span className="info-value">March 15-17, 2025</span>
            </div>
          </div>
          <div className="info-item">
            <div className="info-text">
              <span className="info-label">Venue</span>
              <span className="info-value">Engineering College, Bengaluru</span>
            </div>
          </div>
          <div className="info-item">
            <div className="info-text">
              <span className="info-label">Prize Pool</span>
              <span className="info-value">₹3,00,000+</span>
            </div>
          </div>
          <div className="info-item">
            <div className="info-text">
              <span className="info-label">Mode</span>
              <span className="info-value">In-Person</span>
            </div>
          </div>
        </div>

        <div className="hero-actions">
          <button className="btn-primary" onClick={scrollToRegister}>
            Register Now
            <span className="btn-arrow">→</span>
          </button>
          <button className="btn-secondary">
            View Schedule
          </button>
        </div>

        <div className="hero-stats">
          <div className="stat">
            <span className="stat-number">600+</span>
            <span className="stat-label">Participants</span>
          </div>
          <div className="stat">
            <span className="stat-number">48</span>
            <span className="stat-label">Hours</span>
          </div>
          <div className="stat">
            <span className="stat-number">150+</span>
            <span className="stat-label">Teams</span>
          </div>
          <div className="stat">
            <span className="stat-number">30+</span>
            <span className="stat-label">Mentors</span>
          </div>
          <div className="stat">
            <span className="stat-number">6</span>
            <span className="stat-label">Tracks</span>
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <span>Scroll to explore</span>
      </div>
    </section>
  );
};

export default Hero;
