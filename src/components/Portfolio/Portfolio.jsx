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
      title: "Project Two",
      description: "Description of Project Two.",
      link: "https://github.com/yourusername/project-two"
    },
    // Add more projects as needed
  ];

  return (
    <section id='portfolio'>
      <div className='portfolio__intro'>
      <h5>Take a look at</h5>
      <h2>My Portfolio</h2>
      </div>

      <div className="container portfolio__container">
        <div className='portfolio__content'>
          <p>As I develop projects for my degree, I will add to this section of the website. My current projects include:</p>
          
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
