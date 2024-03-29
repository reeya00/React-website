import React from 'react'
import './contact.css'
import {AiOutlineMail} from 'react-icons/ai'
import {RiMessengerLine} from 'react-icons/ri'
import {AiOutlinePhone} from 'react-icons/ai'
import {useRef} from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form=useRef();
  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_8dwtrko', 'template_79s6a1m', form.current, 'VsIycHYjiw-amVYVA')
  };
  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact_container'>

        <div className="contact_options">

          <article className='contact_option'>
            <AiOutlineMail className='contact_option-icon'/>
            <h4>Email</h4>
            <h5>reeya.baidya@gmail.com</h5>
            <a href='mailto:reeya.baidya@gmail.com' target='_blank'>Send a message</a>
          </article>

          <article className='contact_option'>
            <RiMessengerLine className='contact_option-icon'/>
            <h4>Facebook</h4>
            <h5>reeyabaidya</h5>
            <a href='https://m.me/reeya.baidya' target='_blank'>Send a message</a>
          </article>

          <article className='contact_option'>
            <AiOutlinePhone className='contact_option-icon'/>
            <h4>Phone</h4>
            <h5>+977 9860477873</h5>
            <a href="https://api.whatsapp.com/send?phone+9779860" target='_blank'>Send a message</a>
          </article>
        </div>

        {/* END of contact option */}

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type='email' name='email' placeholder='Your Email' required/>
          <textarea name='message' rows='7' placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact