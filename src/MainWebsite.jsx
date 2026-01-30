// MainWebsite.jsx
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Footer from './components/Footer';
import ThemeToggle from './components/ThemeToggle';
import WhyChooseUs from './components/WhyChooseUs';
import { Link } from 'react-router-dom';
import styles from './styles/FloatingButtons.module.css'; // Import CSS Module

const MainWebsite = ({ theme, toggleTheme }) => {
  const [isScrollVisible, setIsScrollVisible] = useState(false);
  const whatsappNumber = "+237674386778";
  const whatsappMessage = "Hello! I'm interested in your internship program, i will like to in for ......";

  // Show scroll button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsScrollVisible(true);
      } else {
        setIsScrollVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // WhatsApp click handler
  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="app">
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        <Hero />
        <WhyChooseUs />
        <Services />
        <About />
        <Footer />
        
        {/* Floating Buttons Container */}
        <div className={styles['floating-buttons-container']}>
          
          {/* Apply Button - ALWAYS VISIBLE (Bottom-most in column-reverse) */}
          <div className={`${styles['floating-btn-wrapper']} ${styles['apply-wrapper']}`}>
            <Link to="/internship-application" className={styles['apply-link']}>
              <button 
                className={`${styles['floating-btn']} ${styles['apply-btn']}`}
                aria-label="Apply for Internship"
                title="Apply for Internship"
                style={{display: 'flex', visibility: 'visible', opacity: 1}}
              >
               <b>Apply</b>
                <span className={styles.tooltip}>Apply Now</span>
              </button>
            </Link>
          </div>
          
          {/* WhatsApp Button - ALWAYS VISIBLE */}
          <div className={`${styles['floating-btn-wrapper']} ${styles['whatsapp-wrapper']}`}>
            <button 
              onClick={handleWhatsAppClick}
              className={`${styles['floating-btn']} ${styles['whatsapp-btn']}`}
              aria-label="Chat on WhatsApp"
              title="Chat on WhatsApp"
              style={{display: 'flex', visibility: 'visible', opacity: 1}}
            >
              <svg 
                width="28" 
                height="28" 
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  d="M21 11.5C21.0034 12.8199 20.6951 14.1219 20.1 15.3C19.3944 16.7118 18.3098 17.8992 16.9674 18.7293C15.6251 19.5594 14.0782 19.9994 12.5 20C11.1801 20.0034 9.87812 19.6951 8.7 19.1L3 21L4.9 15.3C4.30493 14.1219 3.99656 12.8199 4 11.5C4.00061 9.92179 4.44061 8.37488 5.27072 7.03258C6.10083 5.69028 7.28825 4.6056 8.7 3.90003C9.87812 3.30496 11.1801 2.99659 12.5 3.00003H13C15.0843 3.11502 17.053 3.99479 18.5291 5.47089C20.0052 6.94699 20.885 8.91568 21 11V11.5Z" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
              <span className={styles.tooltip}>Chat on WhatsApp</span>
            </button>
          </div>
          
          {/* Scroll Up Button - Only visible when scrolled */}
          <div className={`${styles['floating-btn-wrapper']} ${styles['scroll-up-wrapper']} ${isScrollVisible ? styles.visible : ''}`}>
            <button 
              onClick={scrollToTop}
              className={`${styles['floating-btn']} ${styles['scroll-up-btn']}`}
              aria-label="Scroll to top"
              title="Scroll to top"
              style={{display: isScrollVisible ? 'flex' : 'none'}}
            >
              <svg 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  d="M12 20L12 4M12 4L5 11M12 4L19 11" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
              <span className={styles.tooltip}>Scroll to Top</span>
            </button>
          </div>

        </div>
        
        {/* Keep ThemeToggle as a separate component if needed elsewhere */}
        {/* <ThemeToggle theme={theme} toggleTheme={toggleTheme} /> */}
    </div>
  );
};

export default MainWebsite;