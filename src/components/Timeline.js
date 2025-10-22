import React from 'react';
import './Timeline.css';

const Timeline = () => {
  const events = [
    {
      time: '08:00 AM',
      title: 'Registration Opens',
      description: 'Check-in, collect your swag kit and ID badges',
      day: 'Day 1 - March 15'
    },
    {
      time: '09:30 AM',
      title: 'Opening Ceremony',
      description: 'Welcome address, keynote speeches, and hackathon rules',
      day: 'Day 1 - March 15'
    },
    {
      time: '11:00 AM',
      title: 'Hacking Begins!',
      description: 'Start building your innovative solutions',
      day: 'Day 1 - March 15'
    },
    {
      time: '01:00 PM',
      title: 'Lunch Break',
      description: 'Networking lunch with mentors and sponsors',
      day: 'Day 1 - March 15'
    },
    {
      time: '03:00 PM',
      title: 'Tech Workshop 1',
      description: 'AI/ML workshop by industry experts',
      day: 'Day 1 - March 15'
    },
    {
      time: '05:00 PM',
      title: 'Mentor Round 1',
      description: 'One-on-one mentorship sessions begin',
      day: 'Day 1 - March 15'
    },
    {
      time: '08:00 PM',
      title: 'Dinner & Fun Activities',
      description: 'Dinner with entertainment and networking',
      day: 'Day 1 - March 15'
    },
    {
      time: '11:00 PM',
      title: 'Midnight Snacks',
      description: 'Coffee, snacks, and late-night coding fuel',
      day: 'Day 1 - March 15'
    },
    {
      time: '08:00 AM',
      title: 'Breakfast',
      description: 'Fresh breakfast to energize your morning',
      day: 'Day 2 - March 16'
    },
    {
      time: '10:00 AM',
      title: 'Tech Workshop 2',
      description: 'Blockchain & Web3 development session',
      day: 'Day 2 - March 16'
    },
    {
      time: '12:00 PM',
      title: 'Mentor Round 2',
      description: 'Final mentorship and project guidance',
      day: 'Day 2 - March 16'
    },
    {
      time: '02:00 PM',
      title: 'Lunch Break',
      description: 'Last meal before final sprint',
      day: 'Day 2 - March 16'
    },
    {
      time: '06:00 PM',
      title: 'Hacking Ends - Submission Deadline',
      description: 'Submit your projects on Devfolio',
      day: 'Day 2 - March 16'
    },
    {
      time: '07:00 PM',
      title: 'Project Presentations',
      description: 'Top teams present to judges',
      day: 'Day 2 - March 16'
    },
    {
      time: '09:00 PM',
      title: 'Closing Ceremony & Awards',
      description: 'Winner announcements, prize distribution, and celebrations',
      day: 'Day 2 - March 16'
    }
  ];

  return (
    <section id="timeline" className="timeline-section">
      <div className="section-background">
        <div className="grid-overlay"></div>
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
      </div>
      <div className="timeline-container">
        <div className="section-header">
          <span className="section-tag">Event Schedule</span>
          <h2 className="section-title">48-Hour Journey</h2>
          <p className="section-description">
            Complete schedule of workshops, mentorship, meals, and milestones
          </p>
        </div>

        <div className="timeline">
          {events.map((event, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-marker">
                <div className="marker-icon"></div>
              </div>
              <div className="timeline-content">
                <div className="timeline-day">{event.day}</div>
                <div className="timeline-time">{event.time}</div>
                <h3 className="timeline-title">{event.title}</h3>
                <p className="timeline-description">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
