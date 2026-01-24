import React from 'react';
import { 
  Briefcase, 
  Users, 
  Award, 
  Clock, 
  TrendingUp, 
  CheckCircle
} from 'lucide-react';
import '../styles/why-choose.css';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: <Briefcase size={32} />,
      title: "Real-World Projects",
      description: "Work on actual industry projects that build your portfolio and give you hands-on experience from day one.",
      color: "var(--primary-color)"
    },
    {
      icon: <Users size={32} />,
      title: "Expert Mentorship",
      description: "Learn directly from industry professionals with years of experience in their respective tech fields.",
      color: "var(--success-color)"
    },
    {
      icon: <Award size={32} />,
      title: "Industry Recognition",
      description: "Our certifications are recognized by leading tech companies and open doors to career opportunities.",
      color: "var(--warning-color)"
    },
    {
      icon: <Clock size={32} />,
      title: "Flexible Learning",
      description: "Choose from full-time, part-time, or self-paced learning options that fit your schedule.",
      color: "var(--secondary-color)"
    },
    {
      icon: <TrendingUp size={32} />,
      title: "Career Growth",
      description: "95% of our graduates secure jobs within 3 months of completing their training programs.",
      color: "var(--primary-color)"
    },
    {
      icon: <CheckCircle size={32} />,
      title: "Proven Curriculum",
      description: "Our curriculum is constantly updated based on industry trends and employer feedback.",
      color: "var(--success-color)"
    }
  ];

  return (
    <section id="why-choose-us" className="section why-choose-section">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Why Choose Us</span>
          <h2 className="section-title">Your Pathway to Tech Excellence</h2>
          <p className="section-description">
            We provide more than just education - we offer a comprehensive ecosystem designed 
            to launch and accelerate your tech career.
          </p>
        </div>
        
        <div className="reasons-grid">
          {reasons.map((reason, index) => (
            <div key={index} className="reason-card">
              <div className="corner-accent"></div>
              <div 
                className="reason-icon-wrapper"
                style={{ color: reason.color }}
              >
                <div className="reason-icon">
                  {reason.icon}
                </div>
              </div>
              <h3 className="reason-title">{reason.title}</h3>
              <p className="reason-description">{reason.description}</p>
              <div className="reason-highlight" style={{ backgroundColor: reason.color }}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;