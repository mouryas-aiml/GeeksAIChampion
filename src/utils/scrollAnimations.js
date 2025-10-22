// Scroll animation utility
export const initScrollAnimations = () => {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
      }
    });
  }, observerOptions);

  // Observe all elements with scroll-animate class
  const animateElements = document.querySelectorAll('.scroll-animate');
  animateElements.forEach(el => observer.observe(el));

  return observer;
};

// Add scroll animation classes to elements
export const addScrollAnimationClasses = () => {
  // Add animation classes to sections
  const sections = document.querySelectorAll('section');
  sections.forEach(section => {
    section.classList.add('scroll-animate');
  });

  // Add animation to cards
  const cards = document.querySelectorAll('.feature-card, .track-card, .sponsor-card, .faq-item, .info-card, .timeline-item');
  cards.forEach((card, index) => {
    card.classList.add('scroll-animate');
    card.style.transitionDelay = `${index * 0.1}s`;
  });
};
