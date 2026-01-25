import React from 'react';
import { Users, Award, ChevronRight, Rocket, Book } from 'lucide-react';
import '../styles/about.css';
import Image3 from '../assets/Images/image3.jpeg'; // keep only this image

const About = () => {
  return (
    // add background container inside section so CSS can place animated blurred shapes behind content
    <section id="about" className="about-section">
      <div className="about-bg" aria-hidden="true">
        <span className="bg-shape circle" />
        <span className="bg-shape cap" />
        <span className="bg-shape angle" />
      </div>

      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-subtitle">About Us</span>
          <h2 className="section-title">Shaping Future Tech Leaders</h2>
          <p className="section-description">
            GeP ProTech Academy is more than a training institution - we're a launchpad
            for careers in technology. Founded with a vision to bridge the digital skills gap.
          </p>
        </div>

        {/* Content Section: Text + Image */}
        <div className="about-content">
          <div className="about-text">
            <div className="about-features">
              <div className="feature-item">
                <Users size={24} className="feature-icon" />
                <div>
                  <h4>Expert Mentors</h4>
                  <p>Learn from industry professionals with years of experience</p>
                </div>
              </div>

              <div className="feature-item">
                <Book size={24} className="feature-icon" />
                <div>
                  <h4>Project-Based</h4>
                  <p>Hands-on learning with real-world projects and case studies</p>
                </div>
              </div>

              <div className="feature-item">
                <Award size={24} className="feature-icon" />
                <div>
                  <h4>Industry-Recognized</h4>
                  <p>Certifications valued by top tech companies worldwide</p>
                </div>
              </div>
            </div>

            <p className="about-mission">
              We empower young people with practical, industry-relevant tech education
              to bridge the gap between ambition and expertise in today's digital landscape.
            </p>

            <button className="btn btn-primary learn-more-btn">
              <a href="http://gepprotech.com" target="_blank" rel="noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                Learn More
              </a>
              <ChevronRight size={20} />
            </button>
          </div>

          <div className="about-image">
            <div className="image-container">
              <img src={Image3} alt="About GeP ProTech" className="about-img" loading="lazy" />
            </div>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="about-cta">
          <div className="cta-content">
            <div className="cta-icon">
              <Rocket size={24} />
            </div>
            <div className="cta-text">
              <h3>Ready to Start Your Journey?</h3>
              <p>Join our program and take the first step towards a successful career in IT</p>
            </div>
            <button className="btn btn-primary cta-btn">
              <Rocket size={20} />
              Apply Now
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;