import React, { useState, useEffect } from 'react';
import { Rocket, ChevronRight, TrendingUp, Users, Award, ArrowRight } from 'lucide-react';
import '../styles/hero.css';
import { useNavigate } from "react-router-dom";
import { useLoading } from "../context/LoadingContext";

import Image1 from '../assets/Images/image1.jpeg';
import Image2 from '../assets/Images/image2.jpeg';
import Image3 from '../assets/Images/image3.jpeg';

const Hero = () => {
  const images = [Image1, Image2, Image3];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000); // 5000ms = 5s

    // cleanup
    return () => clearInterval(interval);
  }, [images.length]);

  const handleImageClick = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const navigate = useNavigate();
  const { setIsLoading } = useLoading();

  const handleClick = () => {
    setIsLoading(true);
    navigate("/internship-application");
  }

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
              <a onClick={handleClick}>
                <button className="btn btn-primary cta-button">
                  Apply Now
                  <ArrowRight size={20} />
                </button>
              </a>
            </div>
          </div>

          <div className="hero-image">
            <div className="image-container">
              {/* image-wrapper contains the visible image area */}
              <div className="image-wrapper" onClick={handleImageClick} aria-hidden="true">
                <div className="main-image">
                  {/* Render current image from the array so it fills the container */}
                  <img
                    src={images[currentIndex]}
                    alt={`Hero ${currentIndex + 1}`}
                    className="hero-img"
                  />
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