import React from 'react';
import './Sponsors.css';

const Sponsors = () => {
  const sponsorTiers = [
    {
      tier: 'Title Sponsor',
      sponsors: [
        { name: 'Devfolio' }
      ]
    },
    {
      tier: 'Platinum Sponsors',
      sponsors: [
        { name: 'GitHub' },
        { name: 'Google Cloud' }
      ]
    },
    {
      tier: 'Gold Sponsors',
      sponsors: [
        { name: 'Microsoft Azure' },
        { name: 'AWS Educate' },
        { name: 'Polygon' }
      ]
    },
    {
      tier: 'Silver Sponsors',
      sponsors: [
        { name: 'Postman' },
        { name: 'MongoDB' },
        { name: 'Vercel' },
        { name: 'Replit' }
      ]
    },
    {
      tier: 'Community Partners',
      sponsors: [
        { name: 'MLH' },
        { name: 'GeeksforGeeks' },
        { name: 'HackerEarth' },
        { name: 'Coding Ninjas' },
        { name: 'InterviewBit' }
      ]
    }
  ];

  return (
    <section id="sponsors" className="sponsors-section">
      <div className="section-background">
        <div className="grid-overlay"></div>
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
      </div>
      <div className="sponsors-container">
        <div className="section-header">
          <span className="section-tag">Our Partners</span>
          <h2 className="section-title">Backed by Industry Leaders</h2>
          <p className="section-description">
            Supported by top tech companies and platforms that power innovation
          </p>
        </div>

        <div className="sponsors-content">
          {sponsorTiers.map((tier, index) => (
            <div key={index} className="sponsor-tier">
              <h3 className="tier-title">{tier.tier}</h3>
              <div className={`sponsors-grid tier-${index}`}>
                {tier.sponsors.map((sponsor, i) => (
                  <div key={i} className="sponsor-card">
                    <div className="sponsor-name">{sponsor.name}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="become-sponsor">
          <h3 className="become-sponsor-title">Become a Sponsor</h3>
          <p className="become-sponsor-text">
            Partner with us to reach 600+ talented developers, showcase your brand, and recruit top talent from India's premier college hackathon.
          </p>
          <div className="sponsor-benefits">
            <div className="benefit-item">Brand Visibility</div>
            <div className="benefit-item">Talent Recruitment</div>
            <div className="benefit-item">Product Demos</div>
            <div className="benefit-item">Workshop Opportunities</div>
          </div>
          <button className="sponsor-cta">Get Sponsorship Deck</button>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
