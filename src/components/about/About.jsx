import React from 'react'
import './about.css'
import ME from '../../assets/me2.png'
import {TbAward} from 'react-icons/tb'
import {IoMdSchool} from 'react-icons/io'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5> 
      <h2>About Me</h2>    

      <div className='container about__container'>
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>

        </div>
        
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <TbAward className='about__icon'/>
              <h5>Experience</h5>
              <small>5+ Customer Service</small>
            </article>
            <article className='about__card'>
              <IoMdSchool className='about__icon'/>
              <h5>Degrees</h5>
              <small>* Bachelor's in Media Communication * Higher Vocational Education Diploma In Java</small>
            </article>
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi corporis quibusdam 
            esse nesciunt dolorum ducimus delectus nisi maiores, temporibus, rerum incidunt animi 
            voluptatum autem, nulla in illo ex quo dolore?
          </p>
          
        </div>
        </div> 
    </section>
  )
}

export default About