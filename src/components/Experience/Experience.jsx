import React from 'react'
import './Experience.css'
import {AiOutlineCheckCircle} from 'react-icons/ai'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__sysadmin">
          <h3>SysAdmin Experience</h3>
          <div className="experience__content">
            <article className='experience__details'><AiOutlineCheckCircle className='experience__details-icon'/>
            <div>
            <h4 >Windows Sever 2021</h4>
            <small >Experienced</small>
            </div>
            </article>
            <article className='experience__details'><AiOutlineCheckCircle className='experience__details-icon' />
            <div>
            <h4 >Windows Sever 2022</h4>
            <small >Experienced</small>
            </div>
            </article>
            <article className='experience__details'><AiOutlineCheckCircle className='experience__details-icon' />
            <div>
            <h4 >DHCP, DNS</h4>
            <small >Experienced</small>
            </div>
            </article>
            <article className='experience__details'><AiOutlineCheckCircle className='experience__details-icon' />
            <div>
            <h4 >IPv4 Networking</h4>
            <small >Experienced</small>
            </div>
            </article>
          </div>
        </div>
        {/* End of SysAdmin Experience */}


        {/* Start of Development Experience */}
        <div className="experience__devadmin">
          <h3>Development Experience</h3>
          <div className="experience__content">
            <article className='experience__details'><AiOutlineCheckCircle className='experience__details-icon'/>
            <div>
            <h4>ReactJS</h4>
            <small>Basic</small>
            </div>
            </article>
            <article className='experience__details'><AiOutlineCheckCircle className='experience__details-icon' />
            <div>
            <h4 >CSS</h4>
            <small >Basic</small>
            </div>
            </article>
            <article className='experience__details'><AiOutlineCheckCircle className='experience__details-icon' />
            <div>
            <h4 >JavaScript</h4>
            <small >Basic</small>
            </div>
            </article>
            <article className='experience__details'><AiOutlineCheckCircle className='experience__details-icon' />
            <div>
            <h4 >Django</h4>
            <small >Basic</small>
            </div>
            </article>
            <article className='experience__details'><AiOutlineCheckCircle className='experience__details-icon' />
            <div>
            <h4 >Python</h4>
            <small >Basic</small>
            </div>
            </article>
          </div>
        </div>
        
        

      </div>
    
    </section>
  )
}

export default Experience