import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsLinkedin} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'



const Contact = () => {
  return (
    <section id="contact">
      <h5>Get In Touch </h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail/>
            <h4>Email</h4>
            <h5>shantanusingh.jobs@gmail.com</h5>
            <a href='mailto: shantanusingh.jobs@gmail.com' target="_blank">Send a message</a>
          </article>
          <article className="contact__option">
            <BsLinkedin/>
            <h4>LinkedIn</h4>
            <h5>Shantanu Singh</h5>
            <a href='linkedlin.com' target="_blank">Send a message</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp/>
            <h4>WhatsApp</h4>
            <h5>+91 8209848435</h5>
            <a href='https://api.whatsapp.com/send?phone=+918209848435' target="_blank">Send a message</a>
          </article>
        </div>
        {/* End of contact options */}
        <form action = ''>
          <input type="text" name = "name" placeholder= "Your Full Name" required />
          <input type="email" name = "email" placeholder= "Your Email" required />
          <textarea name='message' rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact