import React, { useState, useEffect } from 'react';
import { 
  Home, 
  Users, 
  Briefcase, 
  BookOpen, 
  MessageSquare, 
  ChevronRight,
  Mail,
  Phone,
  MapPin,
  Clock,
  CheckCircle,
  Award,
  TrendingUp,
  Code,
  Database,
  Shield,
  Globe,
  Cpu,
  FileText
} from 'lucide-react';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Internships from './components/Internships';
import BlogPreview from './components/BlogPreview';
import Footer from './components/Footer';
import ThemeToggle from './components/ThemeToggle';
import WhyChooseUs from './components/WhyChooseUs';

function App() {
  const [theme, setTheme] = useState('light');
  
  useEffect(() => {
    const savedTheme = localStorage.getItem('gep-theme') || 'light';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('gep-theme', newTheme);
  };

  return (
    <div className="app">
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <Hero />
      <WhyChooseUs />
      <Services />
      <About />
      {/* <Internships /> */}
      {/* <BlogPreview /> */}
      <Footer />
      <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
    </div>
  );
}

export default App;