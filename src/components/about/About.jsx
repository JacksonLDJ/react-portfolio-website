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
        

      <p>Hi, my name is Liam Jackson, I'm currently working full time as a Senior ICT Technician and studying for a degree in Cybersecurity. I've been working as a SysAdmin for the last 9 years and for the last two I have been studing for a Degree in Cybersecurity through a degree apprenticeship. This website is acting as my first project using ReactJS, JavaScript and CSS and is also acting as my portfolio. I plan to add more to this website as I learn both front and back end web development in my free time and look to upload project I have completed outside of this one. Thank you for taking the time to look and read through my website! </p>
        
      </div>
      </div>
    </section>
  )
}

export default About