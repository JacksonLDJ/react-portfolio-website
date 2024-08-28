// CTA.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const CTA = () => {
  const navigate = useNavigate();

  return (
    <div className='cta'>
      <a href="/CV-Website.pdf" download className="btn">Download CV</a>
      <a href="mailto:me@liamjackson.co.uk" className='btn'>Email Me</a>
      <button onClick={() => navigate("/blog") } className="btn">Blog Posts</button>
    </div>
  );
};

export default CTA;
