import React from 'react'
import './Nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {FiMessageCircle} from 'react-icons/fi'
import { useState } from 'react'
const Nav = () => {
  const [activeNav , setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav==='#' ? 'active' : ''}><AiOutlineHome/></a>
      <a href="#About" onClick={() => setActiveNav('#About')} className={activeNav==='#About' ? 'active' : ''}><AiOutlineUser/></a>
      <a href="#Experience" onClick={() => setActiveNav('#Experience')} className={activeNav==='#Experience' ? 'active' : ''}><BiBook/></a>
      <a href="#Contact" onClick={() => setActiveNav('#Contact')} className={activeNav==='#Contact' ? 'active' : ''}><FiMessageCircle/></a>
    </nav>
  )
}

export default Nav
