import React from 'react'
import './About.css'
import { TbAward } from 'react-icons/tb'
import { FaScroll } from 'react-icons/fa'
import { BiBookOpen } from 'react-icons/bi'
import ReactMarkdown from 'react-markdown'

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
              <small>10 Years of IT Working Experience</small>
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


          <p>
            <ReactMarkdown>
              {"*Hi* there! My name is Liam Jackson and I'm currently employed as a Senior ICT Technician whilst studying for a Digital and Technology Solutions: Cybersecurity Degree! I'm also studying for CISCO's CyberOps Associate and COMP TIA's Sec+ qualifications which I aim to complete before I finish my final year of University. \n\nI've been working in IT for over 10 years with experience in SysAdmin and CyberOps. I'm currently working on my Synoptic Project (dissertation) where I'm planning to conduct a full security audit and analysis of my current employers security. I'm using this website to document my final year of studying at the University of Bolton where I hope to attain a First Class Honours Degree in my Cybersecurity Degree Apprenticeship and as a portfolio website. Thanks for checking my website out!"}
            </ReactMarkdown>
          </p>

        </div>
      </div>
    </section>
  )
}

export default About