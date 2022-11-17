import React from 'react'
import './header.css'
import CTA from './CTA'
import PIC1 from '../../assets/Removal-544.png'
import HeaderSocial from './HeaderSocial'

const Header = () => {
  return (
    <header>
      {/* container is the general class we made in css file and header-container is a class in container */}
      <div className="container header_container">
        <h5>Hello I am</h5>
        <h1>Reeya Baidya</h1>
        <h5 className='text-light'>Graphic Designer</h5>

        <CTA/>

        <div className='Pic1'>
          <img src={PIC1} alt="pic1"/>
        </div>

        <a href='#contact' className='scroll_down'>Scroll Down</a>
      
        <HeaderSocial/>      
      </div>

    </header>
  )
}

export default Header