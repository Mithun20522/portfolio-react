import React from 'react'
import './About.css';
import {SiReactivex} from 'react-icons/si'
import {TbSchool} from 'react-icons/tb'
import {GiMicrophone} from 'react-icons/gi'
import {FaChalkboardTeacher} from 'react-icons/fa'
import {VscFolderActive} from 'react-icons/vsc'
import {SiLeetcode} from 'react-icons/si'
const About = () => {
  return (
    <section id='About'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <h5 id='bio'> <TbSchool/> :   I'm a 3rd Year Computer Science & Bio-Science (CSB) Student at IIIT Delhi. <br /> <SiReactivex/> :  Passionate to know about new Technologies. <br /> <GiMicrophone/> :   Singer & Writer too :)</h5>
      <div className='container about__container'>
        <div className='about__content'>
          <div className='about__cards'>
          <article className='about__card'>
            <FaChalkboardTeacher className='about__icon'/>
              <h5>Chegg TBS Expert in DSA</h5>
              <small>3+ Months Working</small> <br />
              <small>Taught 12+ Students Worldwide so far </small>
          </article>
          <article className='about__card'>
            <SiLeetcode className='about__icon'/>
              <h5>Leetcode</h5>
              <small>100+ DSA Problems solved</small>
          </article>
          <article className='about__card'>
            <VscFolderActive className='about__icon'/>
              <h5>Projects</h5>
              <small>3 Completed</small>
          </article>
          </div>
        </div>
      </div>
    </section>
    
  )
}

export default About
