# 🚀 College Hackathon Website

A modern, fully responsive hackathon website built with React, inspired by the PhaseShift design. This website features smooth animations, interactive components, and a beautiful dark theme with cyan/green gradients.

## ✨ Features

- **Modern Design**: Dark theme with vibrant cyan and green gradient accents
- **Fully Responsive**: Optimized for all devices (desktop, tablet, mobile)
- **Smooth Animations**: Interactive hover effects and scroll animations
- **Complete Sections**:
  - 🏠 Hero Section with animated background
  - 📖 About Section with feature cards
  - 📅 Timeline with event schedule
  - 🎯 Tracks Section showcasing different problem statements
  - 🤝 Sponsors Section
  - ❓ FAQ Section with accordion
  - 📝 Registration Form
  - 📧 Footer with social links

## 🛠️ Technologies Used

- React 19.2.0
- CSS3 with custom animations
- Responsive Grid & Flexbox layouts
- Smooth scroll behavior

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:
   ```bash
   cd c:\Users\bhanu\Desktop\myhack
   ```

2. Install dependencies (if not already installed):
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open your browser and visit:
   ```
   http://localhost:3000
   ```

## 📁 Project Structure

```
myhack/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.js & Navbar.css
│   │   ├── Hero.js & Hero.css
│   │   ├── About.js & About.css
│   │   ├── Timeline.js & Timeline.css
│   │   ├── Tracks.js & Tracks.css
│   │   ├── Sponsors.js & Sponsors.css
│   │   ├── FAQ.js & FAQ.css
│   │   ├── Register.js & Register.css
│   │   └── Footer.js & Footer.css
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── package.json
└── README.md
```

## 🎨 Customization Guide

### Colors
The main color scheme uses:
- Primary: `#00ffff` (Cyan)
- Secondary: `#00ff88` (Green)
- Background: `#000` (Black)

To change colors, search for these hex values in the CSS files and replace them.

### Content
Update the following to customize your hackathon:

1. **Hero Section** (`Hero.js`):
   - Event date, venue, prize pool
   - Statistics (participants, hours, projects, mentors)

2. **Timeline** (`Timeline.js`):
   - Event schedule and timings
   - Add/remove timeline events

3. **Tracks** (`Tracks.js`):
   - Problem statements and categories
   - Technologies for each track

4. **Sponsors** (`Sponsors.js`):
   - Add your sponsor logos and names
   - Adjust sponsor tiers

5. **FAQ** (`FAQ.js`):
   - Update questions and answers
   - Add/remove FAQ items

6. **Registration Form** (`Register.js`):
   - Customize form fields
   - Connect to your backend API

7. **Footer** (`Footer.js`):
   - Update contact information
   - Add social media links

## 📱 Responsive Breakpoints

- Desktop: > 968px
- Tablet: 600px - 968px
- Mobile: < 600px

## 🎯 Key Features Explained

### Navbar
- Fixed position with scroll effect
- Smooth scroll to sections
- Mobile hamburger menu
- Transparent to solid background on scroll

### Hero Section
- Animated gradient orbs that follow mouse movement
- Animated grid background
- Call-to-action buttons
- Event statistics display

### Timeline
- Vertical timeline with alternating layout
- Animated markers on hover
- Day-wise event breakdown

### Tracks
- Interactive cards with hover effects
- Color-coded by track
- Technology tags for each track

### Registration Form
- Validation for required fields
- Responsive layout
- Information cards alongside form

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

### Deploy Options

- **Netlify**: Drag and drop the `build` folder
- **Vercel**: Connect your GitHub repo
- **GitHub Pages**: Use `gh-pages` package
- **Firebase Hosting**: Use Firebase CLI

## 📝 TODO / Future Enhancements

- [ ] Add backend integration for registration form
- [ ] Implement email notifications
- [ ] Add countdown timer to event date
- [ ] Create admin dashboard for managing registrations
- [ ] Add photo gallery from previous events
- [ ] Implement live updates during the event
- [ ] Add team formation feature
- [ ] Create mentor matching system

## 🤝 Contributing

Feel free to customize this website for your college hackathon. Some suggestions:

1. Add your college logo and branding
2. Update color scheme to match your theme
3. Add more sections as needed (Team, Workshops, etc.)
4. Integrate with backend APIs
5. Add more animations and interactions

## 📧 Support

For any questions or issues, contact:
- Email: hackathon@college.edu
- Phone: +91 12345 67890

## 📄 License

This project is open source and available for educational purposes.

---

**Built with ❤️ for hackathon organizers**

Happy Hacking! 🎉
