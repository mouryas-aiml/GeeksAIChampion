import React, { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: 'Who can participate in this hackathon?',
      answer: 'All college students from across India are welcome! Whether you\'re a first-year student or in your final year, from any branch - CS, IT, ECE, Mechanical, or any other - you can participate. Teams can have 2-4 members.'
    },
    {
      question: 'Is there any registration fee?',
      answer: 'Absolutely not! Participation is 100% free. We provide free meals (breakfast, lunch, dinner, snacks), swag kits, WiFi, workspace, and accommodation support for outstation participants.'
    },
    {
      question: 'I don\'t have a team. Can I still participate?',
      answer: 'Yes! You can register as an individual and we\'ll help you find teammates during our team formation session on Day 1. Many great teams are formed at the event itself!'
    },
    {
      question: 'What should I bring?',
      answer: 'Bring your laptop, chargers, power bank, student ID card, and lots of enthusiasm! Optional: sleeping bag, toiletries, and a change of clothes if you plan to stay overnight.'
    },
    {
      question: 'Will there be mentors and workshops?',
      answer: 'Yes! We have 30+ mentors from top tech companies and startups. Plus, we\'re conducting workshops on AI/ML, Blockchain, IoT, and more. You\'ll get hands-on guidance throughout the 48 hours.'
    },
    {
      question: 'Can I work on an existing project?',
      answer: 'No, all projects must be built from scratch during the hackathon (starting from 11 AM on Day 1). However, you can use existing libraries, frameworks, APIs, and open-source tools.'
    },
    {
      question: 'How will projects be judged?',
      answer: 'Projects are evaluated on: Innovation & Creativity (30%), Technical Implementation (25%), Design & UX (20%), Practicality & Impact (15%), and Presentation (10%).'
    },
    {
      question: 'What if I\'m a beginner?',
      answer: 'Perfect! This hackathon is beginner-friendly. We have workshops, mentors, and resources to help you learn. Plus, there\'s a special "Best Freshers Team" prize worth ₹25,000!'
    },
    {
      question: 'Is accommodation provided for outstation participants?',
      answer: 'We provide accommodation support and can help arrange nearby budget stays. The venue is open 24/7, so you can also work through the night if you prefer.'
    },
    {
      question: 'What happens after I register?',
      answer: 'You\'ll receive a confirmation email with event details, Discord server link, and pre-event resources. We\'ll also share updates about workshops, sponsors, and prizes as we get closer to the event.'
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="faq-section">
      <div className="section-background">
        <div className="grid-overlay"></div>
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
      </div>
      <div className="faq-container">
        <div className="section-header">
          <span className="section-tag">Got Questions?</span>
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-description">
            Find answers to common questions about the hackathon
          </p>
        </div>

        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`faq-item ${activeIndex === index ? 'active' : ''}`}
              onClick={() => toggleFAQ(index)}
            >
              <div className="faq-question">
                <h3>{faq.question}</h3>
                <span className="faq-icon">{activeIndex === index ? '−' : '+'}</span>
              </div>
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="faq-contact">
          <p className="contact-text">Still have questions?</p>
          <a href="mailto:hackathon@college.edu" className="contact-link">
            Contact us at hackathon@college.edu
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
