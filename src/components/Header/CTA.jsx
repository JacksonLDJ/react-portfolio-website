// CTA.jsx
import React from 'react';
import { Link } from 'react-scroll';

const CTA = () => {
  return (
    <div className='cta'>
      <btn download className="btn">Download CV</btn>
      <a href="mailto:me@liamjackson.co.uk" className='btn'>Email Me</a>
      <Link to="Portfolio" smooth={true} duration={500} className='btn'>Portfolio</Link>
    </div>
  );
};

export default CTA;
