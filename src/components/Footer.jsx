import React from 'react';
import { Mail, Phone, MapPin, Clock, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: "About Us", href: "#about" },
    { name: "Our Programs", href: "#services" },
    { name: "Internships", href: "#internships" },
    { name: "Blog", href: "#blog" },
    { name: "Success Stories", href: "#" },
    { name: "FAQs", href: "#" }
  ];

  const programs = [
    "Full-Stack Development",
    "Data Science",
    "Cybersecurity",
    "Cloud Computing",
    "AI & ML",
    "Mobile Development"
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <span className="logo-text">GeP ProTech</span>
              <span className="logo-accent">Academy</span>
            </div>
            <p className="footer-description">
              Empowering the next generation of tech leaders through 
              practical, industry-focused education and mentorship.
            </p>
            <div className="social-links">
              <a href="#" className="social-link">
                <Facebook size={20} />
              </a>
              <a href="#" className="social-link">
                <Twitter size={20} />
              </a>
              <a href="#" className="social-link">
                <Linkedin size={20} />
              </a>
              <a href="#" className="social-link">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href}>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Our Programs</h4>
            <ul className="footer-links">
              {programs.map((program, index) => (
                <li key={index}>
                  <a href="#">{program}</a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Contact Us</h4>
            <div className="contact-info">
              <div className="contact-item">
                <MapPin size={18} />
                <span>ENS Street Bambili </span>
              </div>
              <div className="contact-item">
                <Phone size={18} />
                <span>+237 674386778</span>
              </div>
              <div className="contact-item">
                <Mail size={18} />
                <span>www.gepprotech.com</span>
              </div>
              <div className="contact-item">
                <Clock size={18} />
                <span>Open From 9:00 AM - 6:00 PM</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} GeP ProTech Academy. All rights reserved.</p>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookie Policy</a>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .footer {
          background-color: var(--secondary-color);
          color: white;
          padding: 4rem 0 2rem;
          margin-top: auto;
        }
        
        .footer-content {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 3rem;
          margin-bottom: 3rem;
        }
        
        .footer-logo {
          display: flex;
          align-items: center;
          font-size: 1.8rem;
          font-weight: 700;
          margin-bottom: 1rem;
        }
        
        .logo-text {
          color: white;
        }
        
        .logo-accent {
          color: var(--primary-color);
          margin-left: 5px;
        }
        
        .footer-description {
          margin-bottom: 1.5rem;
          opacity: 0.9;
          line-height: 1.6;
        }
        
        .social-links {
          display: flex;
          gap: 1rem;
        }
        
        .social-link {
          width: 40px;
          height: 40px;
          background-color: rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          transition: var(--transition);
        }
        
        .social-link:hover {
          background-color: var(--primary-color);
          color: var(--secondary-color);
        }
        
        .footer-section h4 {
          font-size: 1.2rem;
          margin-bottom: 1.5rem;
          color: white;
        }
        
        .footer-links {
          list-style: none;
        }
        
        .footer-links li {
          margin-bottom: 0.8rem;
        }
        
        .footer-links a {
          color: rgba(255, 255, 255, 0.9);
          text-decoration: none;
          transition: var(--transition);
        }
        
        .footer-links a:hover {
          color: var(--primary-color);
          padding-left: 5px;
        }
        
        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        
        .contact-item {
          display: flex;
          align-items: flex-start;
          gap: 0.8rem;
          color: rgba(255, 255, 255, 0.9);
        }
        
        .footer-bottom {
          padding-top: 2rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 1rem;
        }
        
        .footer-bottom p {
          opacity: 0.8;
        }
        
        .footer-bottom-links {
          display: flex;
          gap: 2rem;
        }
        
        .footer-bottom-links a {
          color: rgba(255, 255, 255, 0.8);
          text-decoration: none;
          transition: var(--transition);
        }
        
        .footer-bottom-links a:hover {
          color: var(--primary-color);
        }
        
        @media (max-width: 768px) {
          .footer-content {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          
          .footer-bottom {
            flex-direction: column;
            text-align: center;
          }
          
          .footer-bottom-links {
            justify-content: center;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;