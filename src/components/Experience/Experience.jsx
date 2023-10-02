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
          <h3 className='text-light'>SysAdmin Experience</h3>
          <div className="experience__content">
            <article className='experience__details'><AiOutlineCheckCircle className='experience__details-icon'/>
            <div>
            <h4 className='text-light'>Windows Sever 2021</h4>
            <small className='text-light'>Experienced</small>
            </div>
            </article>
            <article className='experience__details'><AiOutlineCheckCircle className='experience__details-icon' />
            <div>
            <h4 className='text-light'>Windows Sever 2022</h4>
            <small className='text-light'>Experienced</small>
            </div>
            </article>
            <article className='experience__details'><AiOutlineCheckCircle className='experience__details-icon' />
            <div>
            <h4 className='text-light'>DHCP, DNS</h4>
            <small className='text-light'>Experienced</small>
            </div>
            </article>
            <article className='experience__details'><AiOutlineCheckCircle className='experience__details-icon' />
            <div>
            <h4 className='text-light'>IPv4 Networking</h4>
            <small className='text-light'>Experienced</small>
            </div>
            </article>
          </div>
        </div>
        {/* End of SysAdmin Experience */}


        {/* Start of Development Experience */}
        <div className="experience__devadmin">
          <h3 className='text-light'>Development Experience</h3>
          <div className="experience__content">
            <article className='experience__details'><AiOutlineCheckCircle className='experience__details-icon'/>
            <div>
            <h4 className='text-light'>ReactJS</h4>
            <small className='text-light'>Experienced</small>
            </div>
            </article>
            <article className='experience__details'><AiOutlineCheckCircle className='experience__details-icon' />
            <div>
            <h4 className='text-light'>CSS</h4>
            <small className='text-light'>Experienced</small>
            </div>
            </article>
            <article className='experience__details'><AiOutlineCheckCircle className='experience__details-icon' />
            <div>
            <h4 className='text-light'>JavaScript</h4>
            <small className='text-light'>Experienced</small>
            </div>
            </article>
            <article className='experience__details'><AiOutlineCheckCircle className='experience__details-icon' />
            <div>
            <h4 className='text-light'>Django</h4>
            <small className='text-light'>Experienced</small>
            </div>
            </article>
            <article className='experience__details'><AiOutlineCheckCircle className='experience__details-icon' />
            <div>
            <h4 className='text-light'>Python</h4>
            <small className='text-light'>Experienced</small>
            </div>
            </article>
          </div>
        </div>
        
        

      </div>
    
    </section>
  )
}

export default Experience