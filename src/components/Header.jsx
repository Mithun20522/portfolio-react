import React from 'react'
import './Header.css'
import CTA from './CTA'
import me from '../images/img.png'
import Headersocials from './Headersocials'
const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Mithun Verma</h1>
        <h5 className='text-light'>Fullstack Developer</h5>
        <CTA/>
        <Headersocials/>
        <div className="me">
          <img src={me} alt="me" />
        </div>
        <a href="#Contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}
export default Header
