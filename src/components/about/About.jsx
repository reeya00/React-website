import React from 'react'
import './about.css'
import PIC2 from '../../assets/pic2.jpeg'
import {BsAward} from 'react-icons/bs'
import {AiOutlineTrophy} from 'react-icons/ai'
import {VscLibrary} from 'react-icons/vsc'


const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about_container'>
        <div className='about_me'>
          <div className='about_me-image'>
            <img src={PIC2} alt='About Image'/>
          </div>
        </div>

        {/* right side of pic part */}

        <div className="about_content">
          <div className='about_cards'>

            {/* experience card */}
            <article className='about_card'>
              <BsAward className='about_icon'/>
              <h5>Experience</h5>
              <small>3+ years of working</small>
            </article>

            {/* achievement card */}
            <article className='about_card'>
              <AiOutlineTrophy className='about_icon'/>
              <h5>Achievements</h5>
              <small>SFTF Huawei, </small>
              <small>GHC Scholar, </small>
              <small>Design Chief</small>


            </article>

            {/* projects card */}
            <article className='about_card'>
              <VscLibrary className='about_icon'/>
              <h5>Projects</h5>
              <small>Flutter, Node.js, C/C++</small>
            </article>
          </div>
          
          <p>
          I am a graphics and UI/UX designer interested in creating better visual experiences for
people. I am well aware of the power of branding and its role in a successful enterprise. For this reason, I have polished my creative skills in graphics design by working in various communities. I aim to use my attention to detail and creative qualities in all of my future projects.
            </p>

            <a href="https://bit.ly/reeyabaidya_portfolio" className='btn btn-primary'>View Portfolio</a>
        </div>
      </div>
    </section>
  )
}

export default About