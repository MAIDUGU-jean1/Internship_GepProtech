// MainWebsite.jsx
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Footer from './components/Footer';
import ThemeToggle from './components/ThemeToggle';
import WhyChooseUs from './components/WhyChooseUs';

const MainWebsite = ({ theme, toggleTheme }) => {
  return (
    <div className="app">
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        <Hero />
        <WhyChooseUs />
        <Services />
        <About />
        {/* <Internships /> */}
        {/* <BlogPreview /> */}
        <Footer />
        <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
    </div>
  );
};

export default MainWebsite;