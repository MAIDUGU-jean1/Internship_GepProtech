import React from 'react';
import { Rocket, ChevronRight, TrendingUp, Users, Award, ArrowRight } from 'lucide-react';
import '../styles/hero.css';
import Image3 from '../assets/Images/image3.jpeg'

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Empowering <span className="highlight">Young Minds</span> in Technology
            </h1>
            <p className="hero-description">
              GeP ProTech Academy bridges the gap between ambition and expertise. 
              Our vocational training programs equip young people with cutting-edge 
              tech skills for tomorrow's digital landscape.
            </p>
            
            {/* Redesigned CTA - Long and sleek */}
            <div className="hero-cta-long">
              <div className="cta-text">
                <h3>
                  <Rocket size={20} className="cta-icon" />
                  Ready to Start Your Journey?
                </h3>
                <p>
                  Join our internship program and take the first step towards a successful career in IT.
                </p>
              </div>
              <button className="btn btn-primary cta-button">
                Apply Now
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
          
          <div className="hero-image">
            <div className="image-container">
              {/* You can replace this with your actual image */}
              <div className="image-wrapper">
                <div className="main-image">
                <img src={Image3} alt="No Image found " />
                  <div className="placeholder-image">
                    <div className="image-overlay">
                      <span className="image-text">Future Tech Leaders</span>
                    </div>
                  </div>
                </div>
                <div className="image-decoration">
                  <div className="decoration-item item1"></div>
                  <div className="decoration-item item2"></div>
                  <div className="decoration-item item3"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;