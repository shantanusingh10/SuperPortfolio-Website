import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsLinkedin} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs, { sendForm } from 'emailjs-com';
import successMessage from './SuccessMessage';

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_7an9x2p', 'template_ramgudl', form.current, 'tTq_gvavO57zWZmtl')
      .then((result) => {
          console.log(result.text);
          successMessage();
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset();
  };
  return (
    <section id="contact">
      <h5>Get In Touch </h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5 id="email">shantanusingh.jobs@gmail.com</h5>
            <a href='mailto: shantanusingh.jobs@gmail.com' target="_blank">Send an email</a>
          </article>
          <article className="contact__option">
            <BsLinkedin className='contact__option-icon'/>
            <h4>LinkedIn</h4>
            <h5>Shantanu Singh</h5>
            <a href='https://www.linkedin.com/in/shantanulion/' target="_blank">Connect on LinkedIn</a>
          </article>  
          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+91 8209848435</h5>
            <a href='https://api.whatsapp.com/send?phone=918209848435' target="_blank">Send a message</a>
          </article>
        </div>
        {/* End of contact options */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name = "name" placeholder= "Your Full Name" required />
          <input type="email" name = "email" placeholder= "Your Email" required />
          <textarea name='message' rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
          <div class="Success" id="success">
            Thank you for contacting. I'll get back to you shortly.
        </div>
        </form>
        
      </div>
    </section>
  )
}

export default Contact