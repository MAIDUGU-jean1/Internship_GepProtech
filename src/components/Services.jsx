import React from 'react';
import { 
  Database, 
  Code, 
  Monitor, 
  Video, 
  Search, 
  Smartphone,
  Cpu,
  Shield
} from 'lucide-react';
import '../styles/services.css';

const Services = () => {
  const services = [
    {
      image: "/assets/services/frontend.png",
      title: "Frontend Web Development",
      description: "Master HTML, CSS, JavaScript, and modern frameworks like React to build stunning user interfaces."
    },
    {
      image: "/assets/services/backend.png",
      title: "Backend Web Development",
      description: "Learn server-side programming, databases, and API development with Node.js, Python, or PHP."
    },
    {
      image: "/assets/services/mobile.png",
      title: "Mobile App Development",
      description: "Create native and cross-platform mobile applications for iOS and Android using Swift, Kotlin, or React Native."
    },
    {
      image: "/assets/services/design.png",
      title: "Product Design (UI/UX) / Graphic Design",
      description: "Design intuitive user experiences and beautiful visual identities using Figma, Adobe XD, and Photoshop."
    },
    {
      image: "/assets/services/cybersecurity.png",
      title: "Cyber Security",
      description: "Protect digital assets and networks from cyber threats with advanced security training and certifications."
    },
    {
      image: "/assets/services/networking.png",
      title: "Computer Networking and Maintenance",
      description: "Set up and manage secure computer networks and ensure peak performance through regular maintenance."
    },
    {
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop",
      title: "Software and Hardware Maintenance",
      description: "Troubleshoot and repair software issues and hardware components to keep systems running smoothly."
    },
    {
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop",
      title: "Generative AI",
      description: "Explore the cutting-edge world of AI-generated content, LLMs, and prompt engineering."
    },
    {
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2042&auto=format&fit=crop",
      title: "Digital Marketing",
      description: "Grow brands online through SEO, social media marketing, and data-driven advertising strategies."
    },
    {
      image: "https://images.unsplash.com/photo-1507207611509-af012a3edeeb?q=80&w=2070&auto=format&fit=crop",
      title: "Project Management",
      description: "Lead tech projects to success using Agile, Scrum, and modern project management methodologies."
    },
    {
      image: "https://images.unsplash.com/photo-1551288049-bbbda536639a?q=80&w=2070&auto=format&fit=crop",
      title: "Business Intelligence",
      description: "Transform data into strategic business decisions with advanced analytics and visualization tools."
    }
  ];

  return (
    <section id="services" className="services-section">
      <div className="services-bg" aria-hidden="true">
        <span className="code-tag tag1" />
        <span className="code-tag tag2" />
        <span className="code-tag tag3" />
      </div>
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Our Services</span>
          <h2 className="section-title">Comprehensive Tech Training Services</h2>
          <p className="section-description">
            We offer specialized training programs designed to equip you with in-demand skills 
            for today's digital economy.
          </p>
        </div>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-thumbnail">
                <img src={service.image} alt={service.title} />
              </div>
              <div className="service-content">
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <a href="/internship-application" className="btn btn-primary apply-now-btn">
                  Apply Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;