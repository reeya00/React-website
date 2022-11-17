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
              <small>2+ years of working</small>
            </article>

            {/* achievement card */}
            <article className='about_card'>
              <AiOutlineTrophy className='about_icon'/>
              <h5>Achievements</h5>
              <small>Awards & Scholarships</small>
            </article>

            {/* projects card */}
            <article className='about_card'>
              <VscLibrary className='about_icon'/>
              <h5>Projects</h5>
              <small>Prior work</small>
            </article>
          </div>
          
          <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam dignissimos numquam, autem nemo a corrupti exercitationem laborum impedit velit facilis, nam ullam, accusantium facere alias inventore harum. Placeat, eius soluta!
            </p>

            <a href="#conact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About