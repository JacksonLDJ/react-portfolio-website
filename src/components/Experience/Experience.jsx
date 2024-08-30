import React from 'react'
import './Experience.css'
import {AiOutlineCheckCircle} from 'react-icons/ai'

const Experience = () => {
  return (
    <section id='experience'>
      <div className='experience__intro'>
      <h5 className="color-primary">What skills I Have</h5>
      <h2>My Experience</h2>
      </div>

      <div className="container experience__container">
        <div className="experience__sysadmin">
          <h3>SysAdmin/CyberOps Experience</h3>
          <div className="experience__content">
            <article className='experience__details'><AiOutlineCheckCircle className='experience__details-icon' style={{ color: "green"}}/>
            <div>
            <h4 >Windows Server Management</h4>
            <small >Experienced</small>
            </div>
            </article>
            <article className='experience__details'><AiOutlineCheckCircle className='experience__details-icon' style={{ color: "green"}}/>
            <div>
            <h4 >Virtualisation - Hyper-V</h4>
            <small >Experienced</small>
            </div>
            </article>
            <article className='experience__details'><AiOutlineCheckCircle className='experience__details-icon' style={{ color: "green"}}/>
            <div>
            <h4 >Backup & Recovery</h4>
            <small >Experienced</small>
            </div>
            </article>
            <article className='experience__details'><AiOutlineCheckCircle className='experience__details-icon' style={{ color: "green"}}/>
            <div>
            <h4 >Hardware Management</h4>
            <small >Experienced</small>
            </div>
            </article>
            <article className='experience__details'><AiOutlineCheckCircle className='experience__details-icon' style={{ color: "yellow"}}/>
            <div>
            <h4 >Network & End Point Security</h4>
            <small >Intermediate</small>
            </div>
            </article>
            <article className='experience__details'><AiOutlineCheckCircle className='experience__details-icon' style={{ color: "yellow"}}/>
            <div>
            <h4 >Vulnerability Management</h4>
            <small >Intermediate</small>
            </div>
            </article>
          </div>
        </div>
        {/* End of SysAdmin Experience */}


        {/* Start of Development Experience */}
        <div className="experience__devadmin">
          <h3>Development Experience</h3>
          <div className="experience__content">
            <article className='experience__details'><AiOutlineCheckCircle className='experience__details-icon' style={{ color: "red"}} />
            <div>
            <h4>ReactJS</h4>
            <small>Basic</small>
            </div>
            </article>
            <article className='experience__details'><AiOutlineCheckCircle className='experience__details-icon' style={{ color: "red"}} />
            <div>
            <h4 >CSS</h4>
            <small >Basic</small>
            </div>
            </article>
            <article className='experience__details'><AiOutlineCheckCircle className='experience__details-icon' style={{ color: "red"}} />
            <div>
            <h4 >JavaScript</h4>
            <small >Basic</small>
            </div>
            </article>
            <article className='experience__details'><AiOutlineCheckCircle className='experience__details-icon' style={{ color: "yellow"}} />
            <div>
            <h4 >Django</h4>
            <small >Intermediate</small>
            </div>
            </article>
            <article className='experience__details'><AiOutlineCheckCircle className='experience__details-icon' style={{ color: "yellow"}} />
            <div>
            <h4 >Python</h4>
            <small >Intermediate</small>
            </div>
            </article>
            <article className='experience__details'><AiOutlineCheckCircle className='experience__details-icon' style={{ color: "red"}} />
            <div>
            <h4 >MySQL</h4>
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