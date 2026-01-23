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
              <small>Junior Security Consultant and Penetration Tester</small>
            </article>

            <article className='about__card'>
              <FaScroll className='about__icon' />
              <h5>Education</h5>
              <small>1st Class BSc DTS: Cybersecurity</small>
            </article>

            <article className='about__card'>
              <BiBookOpen className='about__icon' />
              <h5>Certifications</h5>
              <small> Cyber Essentials Basics and IASME Cyber Assurance Assessor </small>
            </article>
          </div>


          <p>
            <ReactMarkdown>
              {"*Hi* there! I’m Liam Jackson, a Junior Security Consultant and Penetration Tester. After 10 years working in IT Systems Administration, I made the move into cybersecurity after achieving a First Class degree in DTS: Cybersecurity from the University of Greater Manchester. This site acts as a portfolio to track my progress, projects, and learning as I continue developing my skills and becoming a better penetration tester. Please check out my blog posts to see what I'm up to! "}
            </ReactMarkdown>
          </p>

        </div>
      </div>
    </section>
  )
}

export default About