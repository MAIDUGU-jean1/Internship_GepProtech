import React, { useState, useEffect } from 'react';
import { Menu, X, Home, Users, Briefcase, BookOpen, MessageSquare, Rocket } from 'lucide-react';
import '../styles/navbar.css';

const Navbar = ({ theme, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', checkMobile);

    // Initial check
    checkMobile();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  const navItems = [
    { name: 'Home', icon: <Home size={20} /> },
    { name: 'Services', icon: <Briefcase size={20} /> },
    { name: 'About', icon: <Users size={20} /> },
    { name: 'Internships', icon: <BookOpen size={20} /> },

    // { name: 'Blog', icon: <MessageSquare size={20} /> },
  ];

  const handleMenuToggle = () => {
    console.log('Menu toggled, new state:', !isOpen);
    setIsOpen(!isOpen);
    // Prevent body scroll when menu is open
    if (!isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };

  const handleLinkClick = () => {
    setIsOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''} ${isOpen ? 'menu-open' : ''}`}>
      <div className="container nav-container">
        {/* Left Section: Logo */}
        <div className="nav-section nav-left">
          <div className="nav-logo">
            <span className="logo-text">GeP ProTech</span>
            <span className="logo-accent">Internship</span>
          </div>
        </div>

        {/* Center Section: Navigation Items */}
        <div className={`nav-section nav-center ${isOpen ? 'open' : ''}`}>
          <div className={`nav-links ${isOpen ? 'open' : ''}`}>
            {navItems.map((item) => (
              <a
                key={item.name}
                href={`#${item.name.toLowerCase()}`}
                className="nav-link"
                onClick={handleLinkClick}
              >
                {/* <span className="nav-icon">{item.icon}</span> */}
                <span className="nav-label">{item.name}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Right Section: Actions */}
        <div className="nav-section nav-right">
          <div className="nav-actions">
            <button
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            >
              {theme === 'light' ? '🌙' : '☀️'}
            </button>
            <a href="/internship-application">
              <button className="btn btn-primary apply-btn">
                <Rocket size={18} />
                <span>Apply Now</span>
              </button>
            </a>
            <button
              className="mobile-menu-btn"
              onClick={handleMenuToggle}
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
              {/* {isMobile && <span className="menu-label">{isOpen ? 'Close' : 'Menu'}</span>} */}
            </button>
          </div>
        </div>
      </div>

      {/* Overlay for mobile menu */}
      {isOpen && (
        <div 
          className="mobile-menu-overlay"
          onClick={() => {
            setIsOpen(false);
            document.body.style.overflow = 'auto';
          }}
        />
      )}
    </nav>
  );
};

export default Navbar;