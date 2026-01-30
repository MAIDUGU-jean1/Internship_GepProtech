import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PageLoader from './components/PageLoader';

// Import your components
import MainWebsite from './MainWebsite';
import InternshipApplicationPage from './components/InternshipApplicationPage';

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
    <>
      <Routes>
        <Route 
          path="/" 
          element={
            <MainWebsite 
              theme={theme} 
              toggleTheme={toggleTheme} 
            />
          } 
        />
        <Route 
          path="/internship-application" 
          element={
            <InternshipApplicationPage 
              theme={theme} 
              toggleTheme={toggleTheme} 
            />
          } 
        />
      </Routes>
      <PageLoader />

    </>
  );
}

export default App;