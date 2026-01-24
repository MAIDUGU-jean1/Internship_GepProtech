import React from 'react';
import { Calendar, Clock, Users, BookOpen, Briefcase, DollarSign, Rocket } from 'lucide-react';

const Internships = () => {
  const internships = [
    {
      title: "Junior Developer Intern",
      duration: "3 months",
      level: "Beginner",
      stipend: "$500/month",
      openings: 15,
      description: "Perfect for those starting their coding journey. Learn by contributing to real projects.",
      requirements: ["Basic programming knowledge", "Willingness to learn", "Good communication skills"]
    },
    {
      title: "Data Analyst Intern",
      duration: "4 months",
      level: "Intermediate",
      stipend: "$700/month",
      openings: 10,
      description: "Work with real datasets and learn to derive actionable business insights.",
      requirements: ["Statistics basics", "Excel proficiency", "Analytical mindset"]
    },
    {
      title: "Cybersecurity Intern",
      duration: "6 months",
      level: "Advanced",
      stipend: "$900/month",
      openings: 8,
      description: "Hands-on experience in threat detection, vulnerability assessment, and security protocols.",
      requirements: ["Networking fundamentals", "Linux basics", "Problem-solving skills"]
    }
  ];

  const benefits = [
    "Mentorship from industry experts",
    "Real-world project experience",
    "Certificate of completion",
    "Job placement assistance",
    "Networking opportunities",
    "Flexible work hours"
  ];

  return (
    <section id="internships" className="section internships-section">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Internship Program</span>
          <h2 className="section-title">Launch Your Tech Career</h2>
          <p className="section-description">
            Our internship programs bridge the gap between learning and professional experience. 
            Gain hands-on skills while working on real projects with industry mentorship.
          </p>
        </div>
        
        <div className="internships-grid">
          {internships.map((internship, index) => (
            <div key={index} className="internship-card">
              <div className="internship-header">
                <h3>{internship.title}</h3>
                <span className="level-badge">{internship.level}</span>
              </div>
              
              <div className="internship-details">
                <div className="detail-item">
                  <Calendar size={18} />
                  <span>{internship.duration}</span>
                </div>
                <div className="detail-item">
                  <DollarSign size={18} />
                  <span>{internship.stipend}</span>
                </div>
                <div className="detail-item">
                  <Users size={18} />
                  <span>{internship.openings} openings</span>
                </div>
              </div>
              
              <p className="internship-description">{internship.description}</p>
              
              <div className="requirements">
                <h4>Requirements:</h4>
                <ul>
                  {internship.requirements.map((req, idx) => (
                    <li key={idx}>{req}</li>
                  ))}
                </ul>
              </div>
              
              <button className="btn btn-primary apply-internship-btn">
                <Rocket size={18} />
                Apply Now
              </button>
            </div>
          ))}
        </div>
        
        <div className="benefits-section">
          <div className="benefits-content">
            <h3>Internship Benefits</h3>
            <div className="benefits-list">
              {benefits.map((benefit, index) => (
                <div key={index} className="benefit-item">
                  <CheckCircle size={20} className="benefit-icon" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="cta-box">
            <div className="cta-content">
              <h3>Ready to Transform Your Future?</h3>
              <p>
                Join our next cohort and gain the skills that tech companies are looking for. 
                Limited spots available!
              </p>
              <button className="btn btn-primary cta-button">
                <BookOpen size={20} />
                View All Programs
                <Briefcase size={20} />
              </button>
            </div>
            <div className="cta-stats">
              <div className="cta-stat">
                <div className="stat-number">94%</div>
                <div className="stat-label">Internship Completion</div>
              </div>
              <div className="cta-stat">
                <div className="stat-number">85%</div>
                <div className="stat-label">Job Placement</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .internships-section {
          background-color: var(--card-light);
        }
        
        .internships-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
          margin-bottom: 4rem;
        }
        
        .internship-card {
          background-color: var(--bg-light);
          padding: 2rem;
          border-radius: var(--border-radius);
          box-shadow: var(--shadow);
          transition: var(--transition);
        }
        
        .internship-card:hover {
          transform: translateY(-5px);
        }
        
        .internship-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 1.5rem;
        }
        
        .internship-header h3 {
          color: var(--secondary-color);
          font-size: 1.5rem;
        }
        
        .level-badge {
          background-color: var(--primary-color);
          color: var(--secondary-color);
          padding: 0.3rem 1rem;
          border-radius: 20px;
          font-size: 0.85rem;
          font-weight: 600;
        }
        
        .internship-details {
          display: flex;
          gap: 1.5rem;
          margin-bottom: 1.5rem;
          flex-wrap: wrap;
        }
        
        .detail-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--text-light);
          opacity: 0.9;
        }
        
        .internship-description {
          margin-bottom: 1.5rem;
          color: var(--text-light);
          line-height: 1.6;
        }
        
        .requirements {
          margin-bottom: 2rem;
        }
        
        .requirements h4 {
          margin-bottom: 0.8rem;
          color: var(--secondary-color);
        }
        
        .requirements ul {
          list-style: none;
          padding-left: 0;
        }
        
        .requirements li {
          padding: 0.3rem 0;
          color: var(--text-light);
          opacity: 0.9;
        }
        
        .requirements li:before {
          content: "•";
          color: var(--primary-color);
          font-weight: bold;
          display: inline-block;
          width: 1em;
          margin-left: -1em;
        }
        
        .apply-internship-btn {
          width: 100%;
        }
        
        .benefits-section {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          align-items: start;
        }
        
        .benefits-content h3 {
          font-size: 1.8rem;
          margin-bottom: 2rem;
          color: var(--secondary-color);
        }
        
        .benefits-list {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1rem;
        }
        
        .benefit-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1rem;
          background-color: var(--bg-light);
          border-radius: var(--border-radius);
        }
        
        .benefit-icon {
          color: var(--success-color);
        }
        
        .cta-box {
          background: linear-gradient(135deg, var(--secondary-color) 0%, var(--accent-color) 100%);
          border-radius: var(--border-radius);
          padding: 3rem;
          color: white;
        }
        
        .cta-content h3 {
          font-size: 1.8rem;
          margin-bottom: 1rem;
        }
        
        .cta-content p {
          margin-bottom: 2rem;
          opacity: 0.9;
        }
        
        .cta-button {
          background-color: white;
          color: var(--secondary-color);
          width: 100%;
          margin-bottom: 2rem;
        }
        
        .cta-button:hover {
          background-color: var(--primary-color);
        }
        
        .cta-stats {
          display: flex;
          justify-content: space-around;
          border-top: 1px solid rgba(255, 255, 255, 0.2);
          padding-top: 2rem;
        }
        
        .cta-stat {
          text-align: center;
        }
        
        .stat-number {
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
        }
        
        .stat-label {
          font-size: 0.9rem;
          opacity: 0.9;
        }
        
        @media (max-width: 992px) {
          .benefits-section {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          
          .internships-grid {
            grid-template-columns: 1fr;
          }
        }
        
        @media (max-width: 768px) {
          .internship-details {
            flex-direction: column;
            gap: 1rem;
          }
          
          .cta-box {
            padding: 2rem;
          }
        }
      `}</style>
    </section>
  );
};

// Add CheckCircle component
const CheckCircle = ({ size, className }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
    <polyline points="22 4 12 14.01 9 11.01"></polyline>
  </svg>
);

export default Internships;