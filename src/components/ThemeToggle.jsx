import React from 'react';
import { Rocket } from 'lucide-react';

const ThemeToggle = ({ theme }) => {
  return (
    <button 
      className="floating-theme-toggle" 
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {/* {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />} */}
      {/* <p><Rocket size={20} /></p>   */}
      <h2>Apply Now</h2>
      
      <style jsx>{`
        .floating-theme-toggle {
          position: fixed;
          bottom: 30px;
          right: 30px;
          width: 90px;
          height: 90px;
          background-color: var(--primary-color);
          color: var(--secondary-color);
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: var(--shadow);
          transition: var(--transition);
          z-index: 1000;
        }
        
        .floating-theme-toggle:hover {
          transform: scale(1.1) rotate(30deg);
        }
        
        @media (max-width: 768px) {
          .floating-theme-toggle {
            bottom: 20px;
            right: 20px;
            width: 90px;
            height: 90px;
          }
        }
      `}</style>
    </button>
  );
};

export default ThemeToggle;