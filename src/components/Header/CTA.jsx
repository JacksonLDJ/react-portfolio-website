// CTA.jsx
import React from 'react';
import { Link } from 'react-scroll';
import CV from '../../assets/CV.pdf';

const CTA = () => {
  return (
    <div className='cta'>
      <a href={} download className="btn">Download CV</a>
      <a href="mailto:me@liamjackson.co.uk" className='btn'>Email Me</a>
      <Link to="Portfolio" smooth={true} duration={500} className='btn'>Portfolio</Link>
    </div>
  );
};

export default CTA;
