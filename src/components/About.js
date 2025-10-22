import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="section-background">
        <div className="grid-overlay"></div>
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
      </div>
      <div className="about-container">
        <div className="section-header">
          <span className="section-tag">About Event</span>
          <h2 className="section-title">India's Premier College Hackathon</h2>
          <p className="section-description">
            Where innovation meets opportunity in a 48-hour tech marathon
          </p>
        </div>

        <div className="about-content">
          <div className="about-main">
            <p className="about-text">
              Welcome to one of India's most anticipated college hackathons! We're bringing together 600+ 
              brilliant minds from across the nation for an unforgettable 48-hour journey of innovation, 
              learning, and collaboration. This isn't just another hackathon—it's a launchpad for your ideas.
            </p>
            <p className="about-text">
              Compete across 6 cutting-edge tracks including AI/ML, IoT, Blockchain, Game Development, 
              and Open Innovation. With ₹3,00,000+ in prizes, mentorship from industry leaders, workshops 
              from tech giants, and networking opportunities that could shape your career—this is where 
              your next big breakthrough begins.
            </p>
          </div>

          <div className="about-features">
            <div className="feature-card">
              <h3 className="feature-title">Build & Ship</h3>
              <p className="feature-description">
                Transform your ideas into working prototypes in 48 hours with access to latest tools and technologies
              </p>
            </div>

            <div className="feature-card">
              <h3 className="feature-title">Learn & Grow</h3>
              <p className="feature-description">
                Attend exclusive workshops, masterclasses, and get hands-on mentorship from industry experts
              </p>
            </div>

            <div className="feature-card">
              <h3 className="feature-title">Network & Connect</h3>
              <p className="feature-description">
                Meet like-minded innovators, potential co-founders, and recruiters from top tech companies
              </p>
            </div>

            <div className="feature-card">
              <h3 className="feature-title">Win & Shine</h3>
              <p className="feature-description">
                Compete for ₹3L+ prizes, swag, internship opportunities, and recognition at national level
              </p>
            </div>
          </div>
        </div>

        <div className="about-highlights">
          <div className="highlight-item">
            <h4>National Level Event</h4>
            <p>Open to all college students across India - bring your A-game and compete with the best</p>
          </div>
          <div className="highlight-item">
            <h4>Team Size: 2-4</h4>
            <p>Form your dream team or register solo and we'll help you find amazing teammates</p>
          </div>
          <div className="highlight-item">
            <h4>All Inclusive</h4>
            <p>Free entry, meals, swag kits, WiFi, and accommodation support for outstation participants</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
