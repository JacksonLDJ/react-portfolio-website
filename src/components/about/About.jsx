import React from 'react'
import'./About.css'
import {TbAward} from 'react-icons/tb'
import {FaScroll} from 'react-icons/fa'
import {BiBookOpen} from 'react-icons/bi'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>Me</h2>


      <div className="container about__container">
        <div className='about__content'>
          <div className="about__cards">
        <article className='about__card'>
          <TbAward className='about__icon' />
          <h5>Experience</h5>
          <small>10 Years Working Experience</small>
        </article>
        
        <article className='about__card'>
          <FaScroll className='about__icon' />
          <h5>Education</h5>
          <small>Studying for a degree in DTS: Cybersecurity at the University of Bolton.</small>
        </article>
        
        <article className='about__card'>
          <BiBookOpen className='about__icon' />
          <h5>Extra Studying</h5>
          <small> Studying for a certifcation for CISCO's CyberOps and COMP TIA Sec+</small>
        </article>
        </div>
        

      <p>Hi there! My name is Liam Jackson and I'm currently employed full-time as a Senior ICT Technician at Saint Aidan's Church of Highschool. Whilst working full time I’m also studying full time for a Digital and Technology Solutions: Cybersecurity degree with the University of Bolton. I’m also studying to get Certification as a CISCO Ops Associate and also get the COMPA TIA Sec+ certification. This website aims to act as a portfolio website and a means to introduce myself and has been built within React. As I develop my skills and gain additional qualification, this website is subject to change.</p>
        
      </div>
      </div>
    </section>
  )
}

export default About