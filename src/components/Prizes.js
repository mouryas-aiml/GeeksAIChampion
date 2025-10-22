import React from 'react';
import './Prizes.css';

const Prizes = () => {
  const prizes = [
    {
      position: '1st Place',
      amount: '₹1,50,000',
      perks: ['Cash Prize', 'Internship Opportunities', 'Swag Kit', 'Certificates'],
      highlight: true
    },
    {
      position: '2nd Place',
      amount: '₹1,00,000',
      perks: ['Cash Prize', 'Mentorship Sessions', 'Swag Kit', 'Certificates'],
      highlight: false
    },
    {
      position: '3rd Place',
      amount: '₹50,000',
      perks: ['Cash Prize', 'Swag Kit', 'Certificates'],
      highlight: false
    }
  ];

  const specialPrizes = [
    {
      title: 'Best Freshers Team',
      prize: '₹25,000',
      description: 'For the best project by first-year students'
    },
    {
      title: 'Best All-Girls Team',
      prize: '₹25,000',
      description: 'Encouraging diversity in tech'
    },
    {
      title: 'Best Social Impact',
      prize: '₹20,000',
      description: 'For solutions addressing social challenges'
    },
    {
      title: 'Best Use of AI',
      prize: '₹20,000',
      description: 'Most innovative use of AI/ML'
    }
  ];

  return (
    <section id="prizes" className="prizes-section">
      <div className="section-background">
        <div className="grid-overlay"></div>
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
      </div>
      <div className="prizes-container">
        <div className="section-header">
          <span className="section-tag">Rewards</span>
          <h2 className="section-title">₹3,00,000+ Prize Pool</h2>
          <p className="section-description">
            Compete for exciting prizes, internships, and recognition
          </p>
        </div>

        <div className="main-prizes">
          {prizes.map((prize, index) => (
            <div key={index} className={`prize-card ${prize.highlight ? 'highlight' : ''}`}>
              <div className="prize-position">{prize.position}</div>
              <div className="prize-amount">{prize.amount}</div>
              <div className="prize-perks">
                {prize.perks.map((perk, i) => (
                  <div key={i} className="perk-item">
                    <span className="perk-dot"></span>
                    <span>{perk}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="special-prizes-section">
          <h3 className="special-prizes-title">Special Category Prizes</h3>
          <div className="special-prizes-grid">
            {specialPrizes.map((prize, index) => (
              <div key={index} className="special-prize-card">
                <h4 className="special-prize-title">{prize.title}</h4>
                <div className="special-prize-amount">{prize.prize}</div>
                <p className="special-prize-description">{prize.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="additional-perks">
          <h3 className="perks-title">Everyone Gets</h3>
          <div className="perks-grid">
            <div className="perk-box">
              <h4>Participation Certificate</h4>
              <p>For all participants</p>
            </div>
            <div className="perk-box">
              <h4>Swag Kits</h4>
              <p>T-shirts, stickers, and goodies</p>
            </div>
            <div className="perk-box">
              <h4>Free Meals</h4>
              <p>Breakfast, lunch, dinner & snacks</p>
            </div>
            <div className="perk-box">
              <h4>Networking</h4>
              <p>Connect with industry leaders</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Prizes;
