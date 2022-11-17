import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {AiOutlineBook} from 'react-icons/ai'
import {AiOutlinePhone} from 'react-icons/ai'
import { useState} from 'react' /* for nav bar active state*/

const Nav = () => {
  const [activeNav, setActiveNav]=useState('#');
  return (
    <nav> 
      {/* if avtiveNav is this then give active class 'active' else give ''  */}
      <a href='#' onClick={() =>setActiveNav('#')} className={activeNav==='#' ? 'active': ''}><AiOutlineHome/></a>
      <a href='#about' onClick={() =>setActiveNav('#about')}  className={activeNav==='#about' ? 'active': ''}><AiOutlineUser/></a>
      <a href='#experience' onClick={() =>setActiveNav('#experience')}  className={activeNav==='#experience' ? 'active': ''}><AiOutlineBook/></a>
      <a href='#contact' onClick={() =>setActiveNav('#contact')}  className={activeNav==='#contact' ? 'active': ''}><AiOutlinePhone/></a>
    </nav>
  )
}

export default Nav