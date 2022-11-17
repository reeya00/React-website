import React from 'react'
import {AiFillLinkedin} from 'react-icons/ai'
import {AiFillGithub} from 'react-icons/ai'
import {AiFillFacebook} from 'react-icons/ai'

const HeaderSocial= () => {
  return (
    <div className='header_social'>
        {/* opens new tab when clicking react-icon */}
        <a href='https://linkedin.com' target='blank'><AiFillLinkedin/></a>
        <a href='https://github.com' target='blank'><AiFillGithub/></a>
        <a href='https://facebook.com' target='blank'><AiFillFacebook/></a>
    </div>
  )
}

export default HeaderSocial
