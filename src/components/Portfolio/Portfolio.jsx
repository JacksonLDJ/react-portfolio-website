import React from 'react'
import './Portfolio.css'

const Portfolio = () => {
  const projects = [
    {
      title: "ProbNet2",
      description: "My University of Bolton's SWE5208 - Business Software Develoment module. The purpose of the two assignments was to plan and then implement a web based network scanning tool that would write it's results back to a Database.",
      link: "https://github.com/yourusername/project-one"
    },
    {
      title: "University of Bolton Synoptic Project (Dissertation)",
      description: "This is my final year project for my degree and is the same as a dissertation. During this project I will complete a full security audit of my employer, taking everything that I have learned from my degree and applying it to a real world scenario.",
      link: ""
    },
    // Add more projects as needed
  ];

  return (
    <section id='portfolio'>
      <div className='portfolio__intro'>
      <h5 className="color-primary">Take a look at</h5>
      <h2>My Projects</h2>
      </div>

      <div className="container portfolio__container">
        <div className='portfolio__content'>
          <p>This section aims to cover the development of my Synotpic project (dissertation) that I will complete during the final year of my degree but also any software development projects I complete.</p>
          
          <ul>
            {projects.map((project, index) => (
              <li key={index} className="portfolio__item">
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <div className="portfolio__item-content">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Portfolio
