import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'
const Headersocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/mithun-verma-0a334b248/" target='blank'><BsLinkedin/></a>
        <a href="https://github.com/Mithun20522" target='blank'><BsGithub/></a>
        <a href="https://www.instagram.com/realmv_01/?next=%2F" target='blank'><BsInstagram/></a>
        <a href="https://twitter.com/En_gi_neer01" target='blank'><BsTwitter/></a>
    </div>
  )
}

export default Headersocials
