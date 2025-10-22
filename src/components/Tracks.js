import React from 'react';
import './Tracks.css';

const Tracks = () => {
  const tracks = [
    {
      title: 'AI & Machine Learning',
      description: 'Build intelligent systems using ML, deep learning, NLP, computer vision, and generative AI to solve complex real-world problems',
      technologies: ['TensorFlow', 'PyTorch', 'OpenAI', 'Scikit-learn'],
      color: '#00ffff'
    },
    {
      title: 'IoT & Hardware',
      description: 'Create innovative IoT solutions, smart devices, and embedded systems that connect the physical and digital worlds',
      technologies: ['Arduino', 'Raspberry Pi', 'ESP32', 'Sensors'],
      color: '#00ff88'
    },
    {
      title: 'Blockchain & Web3',
      description: 'Develop decentralized applications, smart contracts, DeFi solutions, and explore the future of web with blockchain',
      technologies: ['Solidity', 'Ethereum', 'Web3.js', 'Polygon'],
      color: '#ff00ff'
    },
    {
      title: 'Game Development',
      description: 'Design and build engaging games, interactive experiences, VR/AR applications, and gamification solutions',
      technologies: ['Unity', 'Unreal Engine', 'Godot', 'Three.js'],
      color: '#ffff00'
    },
    {
      title: 'Social Impact',
      description: 'Create solutions for education, healthcare, sustainability, accessibility, and other social challenges',
      technologies: ['Any Stack', 'Mobile', 'Web', 'IoT'],
      color: '#ff6600'
    },
    {
      title: 'Open Innovation',
      description: 'Build anything innovative! No restrictions - showcase your creativity and technical skills in any domain',
      technologies: ['Your Choice', 'Any Framework', 'Any Platform'],
      color: '#00ff00'
    }
  ];

  return (
    <section id="tracks" className="tracks-section">
      <div className="section-background">
        <div className="grid-overlay"></div>
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
      </div>
      <div className="tracks-container">
        <div className="section-header">
          <span className="section-tag">Problem Statements</span>
          <h2 className="section-title">6 Exciting Tracks</h2>
          <p className="section-description">
            Choose your domain and build innovative solutions that matter
          </p>
        </div>

        <div className="tracks-grid">
          {tracks.map((track, index) => (
            <div key={index} className="track-card" style={{'--track-color': track.color}}>
              <h3 className="track-title">{track.title}</h3>
              <p className="track-description">{track.description}</p>
              <div className="track-technologies">
                {track.technologies.map((tech, i) => (
                  <span key={i} className="tech-tag">{tech}</span>
                ))}
              </div>
              <div className="track-overlay"></div>
            </div>
          ))}
        </div>

        <div className="tracks-cta">
          <p className="cta-text">Can't find your track? Build in the Open Innovation category!</p>
          <button className="cta-button">View Detailed Problem Statements</button>
        </div>
      </div>
    </section>
  );
};

export default Tracks;
