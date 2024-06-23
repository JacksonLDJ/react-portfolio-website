import React, { useState, useEffect } from 'react';
import './Header.css';
import CTA from './CTA';

const Header = () => {
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      // Adjust the formula based on your preference
      const newOpacity = 1 - scrollPosition / 10;
      setOpacity(newOpacity < 0 ? 0 : newOpacity); // Ensure opacity doesn't go below 0
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header id = 'header'>
      <div className="header__container">
        <h5>Hello, I'm</h5>
        <h1>Liam Jackson</h1>
        <h5>Senior ICT Technician and Cybersecurity University Student</h5>
        <CTA />
      </div>

      <div className="scroll-down-arrow" style={{ opacity }}>
        <span>↓</span>
      </div>
    </header>
  );
};

export default Header;
