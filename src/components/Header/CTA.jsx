import React from 'react'
import CV from '../../assets/CV.pdf' 

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download className="btn">Download CV</a>
        <a href="mailto:me@liamjackson.co.uk" className='btn btn-primary'>Email Me</a>
    </div>
  )
}

export default CTA