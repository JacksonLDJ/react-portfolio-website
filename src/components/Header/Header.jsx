import React from 'react'
import './Header.css'
import CTA from './CTA'
import HeaderSocial from './HeaderSocial'




const Header = () => {
  return (
    <header>
      <div className="header__container">
        <h5>Hello, I'm</h5>
        <h1>Liam Jackson</h1>
        <h5>Senior ICT Technician and Cybersecurity University Student</h5>
        <CTA></CTA>
        
      </div>
    </header>
  )
}

export default Header