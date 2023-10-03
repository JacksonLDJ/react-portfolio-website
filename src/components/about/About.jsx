import React from 'react'
import'./About.css'
import {TbAward} from 'react-icons/tb'
import {FaScroll} from 'react-icons/fa'
import {BiBookOpen} from 'react-icons/bi'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>


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
          <small>Foundation Degree/Studying for BSc in Cybersecurity</small>
        </article>
        
        <article className='about__card'>
          <BiBookOpen className='about__icon' />
          <h5>Ready to Learn</h5>
          <small>Love to learn!</small>
        </article>
        </div>
        

      <p>Hello there! My name is Liam Jackson, I'm currently working full-time as a Senior ICT Technician at a Secondary School whilst studying for a degree in Cybersecurity through the Degree Apprenticeship scheme! This website aims to act primarily as a portfolio website of projects completed during my degree, but also personal projects I aim to complete in my own time. The website itself aims to demonstrate my ability to create a website using React, JSX, CSS and HTML. I aim to develop this website further to implemement cybersecurity ideas and theories to secure the website. This is ultiamtely a work in process and whilst live, it is subject to change! Thanks for taking the time to look over my website!  </p>
        
      </div>
      </div>
    </section>
  )
}

export default About