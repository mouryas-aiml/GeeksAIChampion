import React from 'react';
import './Contact.css';

const Contact = () => {
  // Dr. Ambedkar Institute of Technology - Outer Ring Road, Naagarabhaavi
  // To get the correct embed URL with marker:
  // 1. Go to https://www.google.com/maps
  // 2. Search for "Dr. Ambedkar Institute of Technology, Outer Ring Road, Naagarabhaavi"
  // 3. Click "Share" button
  // 4. Click "Embed a map" tab
  // 5. Copy the src URL from the iframe code and paste it below
  const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.1278150063117!2d77.50345577593006!3d12.963672087350956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3e9c40000001%3A0x2d368cebf691c5fb!2sDr.%20Ambedkar%20Institute%20Of%20Technology!5e0!3m2!1sen!2sin!4v1761238580451!5m2!1sen!2sin";

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h2 className="contact-title">Contact</h2>
        
        <div className="contact-content">
          <div className="contact-map">
            <iframe
              title="Location Map"
              src={mapUrl}
              width="100%"
              height="100%"
              style={{ border: 0, borderRadius: '12px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div className="contact-info">
            <div className="contact-card">
              <div className="contact-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <h3>Our Address</h3>
              <p>Ambedkar Institute of Technology, Outer Ring Rd, near Gnana Bharathi, Naagarabhaavi, Bengaluru, Karnataka 560056</p>
            </div>

            <div className="contact-card">
              <div className="contact-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </svg>
              </div>
              <h3>Email Us</h3>
              <p>contact@drait.edu.in</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
