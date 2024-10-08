import React from 'react'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import './headersocial.css'

const HeaderSocial = () => {
  return (
    <div className='header__socials-wrapper'>
      <div className='header__socials'>
        <a href="https://www.linkedin.com/in/liam-jackson-29717a294/" target='_blank' rel='noopener noreferrer'><FaLinkedin /></a>
        <a href="https://github.com/JacksonLDJ" target='_blank' rel='noopener noreferrer'><FaGithub /></a>
      </div>
    </div>
  )
}

export default HeaderSocial
