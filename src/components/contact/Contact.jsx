import React from 'react';
import './Contact.css';
import { HiOutlineMail } from 'react-icons/hi';
import { AiFillLinkedin } from 'react-icons/ai';

const Contact = () => {
  return (
    <section id='contact'>
      <div className='contact__intro'>
        <h5 className="color-primary">Get In Touch</h5>
        <h2>Contact Me</h2>
      </div>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <HiOutlineMail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>me@liamjackson.co.uk</h5>
            <a href="mailto:me@liamjackson.co.uk">Send me a message!</a>
          </article>
          <article className="contact__option">
            <AiFillLinkedin className='contact__option-icon'/>
            <h4>LinkedIn</h4>
            <h5>me@liamjackson.co.uk</h5>
            <a href="https://www.linkedin.com/in/liam-jackson-29717a294/">Connect with me on LinkedIn!</a>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Contact;