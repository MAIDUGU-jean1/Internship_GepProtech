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
      icon: <Database size={28} />,
      title: "Data Analysis",
      description: "Transform raw data into actionable insights with our comprehensive data analysis training."
    },
    {
      icon: <Code size={28} />,
      title: "Web Development",
      description: "Build responsive, modern websites and web applications with cutting-edge technologies."
    },
    {
      icon: <Monitor size={28} />,
      title: "Basic IT",
      description: "Master essential IT skills including hardware, software, networking, and troubleshooting."
    },
    {
      icon: <Video size={28} />,
      title: "Video Production",
      description: "Learn professional video editing, animation, and multimedia content creation."
    },
    {
      icon: <Search size={28} />,
      title: "SEO Optimization",
      description: "Optimize websites for search engines and improve online visibility and rankings."
    },
    {
      icon: <Smartphone size={28} />,
      title: "App Development",
      description: "Create mobile applications for iOS and Android platforms using modern frameworks."
    },
    {
      icon: <Cpu size={28} />,
      title: "Software Engineering",
      description: "Master software development principles, architecture, and best practices."
    },
    {
      icon: <Shield size={28} />,
      title: "Cybersecurity",
      description: "Protect systems and networks from digital attacks and ensure data security."
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
              <div className="service-icon">
                {service.icon}
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;