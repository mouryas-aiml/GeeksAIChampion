import React, { useState } from 'react';
import './Register.css';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    college: '',
    year: '',
    phone: '',
    track: '',
    teamSize: '1'
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Registration submitted successfully! We will contact you soon.');
    // Here you would typically send the data to your backend
  };

  return (
    <section id="register" className="register-section">
      <div className="section-background">
        <div className="grid-overlay"></div>
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
      </div>
      <div className="register-container">
        <div className="section-header">
          <span className="section-tag">Join Us</span>
          <h2 className="section-title">Register Now</h2>
          <p className="section-description">
            Secure your spot at the most exciting hackathon of the year
          </p>
        </div>

        <div className="register-content">
          <div className="register-info">
            <div className="info-card">
              <h3>Why Register?</h3>
              <ul>
                <li>Access to exclusive workshops</li>
                <li>Mentorship from industry experts</li>
                <li>Networking opportunities</li>
                <li>Amazing prizes and swag</li>
                <li>Free food and beverages</li>
              </ul>
            </div>

            <div className="info-card">
              <h3>Important Dates</h3>
              <div className="date-item">
                <span className="date-label">Registration Closes:</span>
                <span className="date-value">March 10, 2025</span>
              </div>
              <div className="date-item">
                <span className="date-label">Event Dates:</span>
                <span className="date-value">March 15-17, 2025</span>
              </div>
              <div className="date-item">
                <span className="date-label">Results:</span>
                <span className="date-value">March 17, 2025</span>
              </div>
            </div>

            <div className="info-card">
              <h3>Prize Pool</h3>
              <div className="prize-item">
                <span className="prize-position">1st Place</span>
                <span className="prize-amount">₹1,00,000</span>
              </div>
              <div className="prize-item">
                <span className="prize-position">2nd Place</span>
                <span className="prize-amount">₹60,000</span>
              </div>
              <div className="prize-item">
                <span className="prize-position">3rd Place</span>
                <span className="prize-amount">₹40,000</span>
              </div>
            </div>
          </div>

          <form className="register-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Full Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Enter your full name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your.email@example.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="college">College Name *</label>
              <input
                type="text"
                id="college"
                name="college"
                value={formData.college}
                onChange={handleChange}
                required
                placeholder="Your college name"
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="year">Year of Study *</label>
                <select
                  id="year"
                  name="year"
                  value={formData.year}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Year</option>
                  <option value="1">1st Year</option>
                  <option value="2">2nd Year</option>
                  <option value="3">3rd Year</option>
                  <option value="4">4th Year</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone Number *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="track">Preferred Track *</label>
              <select
                id="track"
                name="track"
                value={formData.track}
                onChange={handleChange}
                required
              >
                <option value="">Select Track</option>
                <option value="web">Web Development</option>
                <option value="ai">AI & Machine Learning</option>
                <option value="mobile">Mobile Development</option>
                <option value="blockchain">Blockchain & Web3</option>
                <option value="iot">IoT & Hardware</option>
                <option value="sustainability">Sustainability</option>
                <option value="open">Open Innovation</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="teamSize">Team Size</label>
              <select
                id="teamSize"
                name="teamSize"
                value={formData.teamSize}
                onChange={handleChange}
              >
                <option value="1">Solo (1 member)</option>
                <option value="2">2 members</option>
                <option value="3">3 members</option>
                <option value="4">4 members</option>
              </select>
            </div>

            <button type="submit" className="submit-btn">
              Complete Registration
              <span className="btn-arrow">→</span>
            </button>

            <p className="form-note">
              * Required fields. By registering, you agree to our terms and conditions.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Register;
