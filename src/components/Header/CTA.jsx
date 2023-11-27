// CTA.jsx
import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import CV from '../../assets/CV.pdf';

const CTA = () => {
  return (
    <div className='cta'>
      <a href={CV} download className="btn">Download CV</a>
      <a href="mailto:me@liamjackson.co.uk" className='btn btn-primary'>Email Me</a>
      <Link to="Portfolio" smooth={true} duration={500} className='btn btn-primary'>Portfolio</Link>
    </div>
  );
};

export default CTA;
