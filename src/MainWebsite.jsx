// MainWebsite.jsx
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Footer from './components/Footer';
import ThemeToggle from './components/ThemeToggle';
import WhyChooseUs from './components/WhyChooseUs';
import { Link } from 'react-router-dom';

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
        <Link to="/internship-application"><ThemeToggle theme={theme} /></Link>
    </div>
  );
};

export default MainWebsite;