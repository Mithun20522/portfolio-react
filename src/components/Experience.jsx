import React from 'react'
import './Experience.css'
import {BsCheck2Circle} from 'react-icons/bs'
const Experience = () => {
  return (
    <section id='Experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className='container Experience__container'>
          <div className='Experience__development'>
                <h3>Development: </h3>
                <div className='Experience__content'>
                  <article className='Experience__details'>
                      <h4><BsCheck2Circle/> ReactJS , React-Native , NodeJS</h4>
                      <small className='text-light'>Intermediate</small>
                  </article>
                  <article className='Experience__details'>
                      
                      <h4> <BsCheck2Circle/> HTML , CSS , JavaScript</h4>
                      <small className='text-light'>Experienced</small>
                  </article>
                  <article className='Experience__details'>
                      
                      <h4><BsCheck2Circle/> Bootstrap , Tailwind , DaisyUI</h4>
                      <small className='text-light'>Experienced</small>
                  </article>
                  <article className='Experience__details'>
                      
                      <h4><BsCheck2Circle/> JavaFX , Figma , Sanity.io</h4>
                      <small className='text-light'>Experienced</small>
                  </article>
                </div>
          </div>
          <div className='Experience__techstacks'>
          <h3>Academics: </h3>
                <div className='Experience__content'>
                  <article className='Experience__details'>
                      <h4><BsCheck2Circle/> Java , C/C++ , Python</h4>
                      <small className='text-light'>Experienced</small>
                  </article>
                  <article className='Experience__details'>
                      
                      <h4><BsCheck2Circle/> Data Structures & Algorithms</h4>
                      <small className='text-light'>Intermediate</small>
                  </article>
                  <article className='Experience__details'>
                     
                      <h4> <BsCheck2Circle/> DataBase Management System</h4>
                      <small className='text-light'>Intermediate</small>
                  </article>
                  <article className='Experience__details'>
                      
                      <h4><BsCheck2Circle/> Operating Systems & Computer Networks</h4>
                      <small className='text-light'>Intermediate</small>
                  </article>
                </div>
          </div>
      </div>
    </section>
  )
}

export default Experience
