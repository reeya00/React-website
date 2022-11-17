import React from 'react'
import './experience.css'
import {BsFillPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

    <div className='container experience_container'>
      <div className="experience_graphics">
        <h3>Graphic Design</h3>
        <div className="experience_content">
          <article className='experience_details'>
            <BsFillPatchCheckFill className='experience_details-icon'/>
            <h4>Illustrator</h4>
          </article>
          <article className='experience_details'>
            <BsFillPatchCheckFill className='experience_details-icon'/>
            <h4>Photoshop</h4>
          </article>
          <article className='experience_details'>
            <BsFillPatchCheckFill className='experience_details-icon'/>
            <h4>Lightroom</h4>
          </article>
          <article className='experience_details'>
            <BsFillPatchCheckFill className='experience_details-icon'/>
            <h4>Figma</h4>
          </article>
          <article className='experience_details'>
            <BsFillPatchCheckFill className='experience_details-icon'/>
            <h4>Canva</h4>
          </article>
          <article className='experience_details'>
            <BsFillPatchCheckFill className='experience_details-icon'/>
            <h4>Premiere Pro</h4>
          </article>
          <article className='experience_details'>
            <BsFillPatchCheckFill className='experience_details-icon'/>
            <h4>After Effects</h4>
          </article>
        </div>
      </div> 

      {/* end od graphics  */}
      <div className='experience_language'>
        <h3>Languages</h3>
        <div className='experience_content'>
          <article className='experience_details'>
          <BsFillPatchCheckFill className='experience_details-icon'/>
          <h4>JavaScript</h4>
          </article>
          <article className='experience_details'>
          <BsFillPatchCheckFill className='experience_details-icon'/>
          <h4>Python</h4>
          </article>
          <article className='experience_details'>
          <BsFillPatchCheckFill className='experience_details-icon'/>
          <h4>HTML</h4>
          </article>
          <article className='experience_details'>
          <BsFillPatchCheckFill className='experience_details-icon'/>
          <h4>CSS</h4>
          </article>
          <article className='experience_details'>
          <BsFillPatchCheckFill className='experience_details-icon'/>
          <h4>C/C++</h4>
          </article>
        </div>
              
      </div>

      

    </div>

</section>
  )
}

export default Experience