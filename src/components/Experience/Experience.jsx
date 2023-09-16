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
            <article className='experience__details'><AiOutlineCheckCircle className='className='text-light/>
            <h4 className='text-light'>Windows Sever 2021</h4>
            <small className='text-light'>Experienced</small>
            </article>
            <article className='experience__details'><AiOutlineCheckCircle />
            <h4 className='text-light'>Windows Sever 2022</h4>
            <small className='text-light'>Experienced</small>
            </article>
            <article className='experience__details'><AiOutlineCheckCircle />
            <h4 className='text-light'>DHCP, DNS</h4>
            <small className='text-light'>Experienced</small>
            </article>
            <article className='experience__details'><AiOutlineCheckCircle />
            <h4 className='text-light'>IPv4 Networking</h4>
            <small className='text-light'>Experienced</small>
            </article>
          </div>
        </div>
        {/* End of SysAdmin Experience */}


        {/* Start of Development Experience */}
        <div className="experiernce__development">
          <h3 className='text-light'>Development Experience</h3>
          <div className='experience_content'>
            <article className='experience__details'><AiOutlineCheckCircle />
            <h4 className='text-light'>Windows Sever 2021</h4>
            <small className='text-light'>Experienced</small>
            </article>
          </div>
        </div>

      </div>
    
    </section>
  )
}

export default Experience