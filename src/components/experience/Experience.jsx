import React from 'react'
import './experience.css'
import {AiFillCheckCircle} from 'react-icons/ai'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>Tools I Am Using</h5>
      <h2>My Experience</h2>

      <div className='container experience__container'>
        <div className='experience__frontend'>
          <h3>Frontend Development</h3>
          <div className='experience_content'>
            <article className='experience__details'>
              <AiFillCheckCircle className='experience__details-icon'/>
              <div>
                <h4>HTML/CSS</h4>
              </div>
            </article>
            <article className='experience__details'>
            <AiFillCheckCircle className='experience__details-icon'/>
              <div>
                <h4>JavaScript</h4>
              </div>
            </article>
            <article className='experience__details'>
            <AiFillCheckCircle className='experience__details-icon'/>
              <div>
                <h4>Bootstrap</h4>
              </div>
            </article>
            <article className='experience__details'>
            <AiFillCheckCircle className='experience__details-icon'/>
              <div>
                <h4>Vue</h4>
              </div>
            </article>
            <article className='experience__details'>
            <AiFillCheckCircle className='experience__details-icon'/>
              <div>
                <h4>React</h4>
              </div>
            </article>
          </div>
        </div>
        {/* END OF FRONTEND */}

        <div className='experience__backend'>
        <h3>Backend Development</h3>
          <div className='experience_content'>
            <article className='experience__details'>
            <AiFillCheckCircle className='experience__details-icon'/>
              <div>
                <h4>Node JS</h4>
              </div>
            </article>
            <article className='experience__details'>
            <AiFillCheckCircle className='experience__details-icon'/>
              <div>
                <h4>MongoDB</h4>
              </div>
            </article>
            <article className='experience__details'>
            <AiFillCheckCircle className='experience__details-icon'/>
              <div>
                <h4>MSSQL</h4>
              </div>
            </article>
            <article className='experience__details'>
            <AiFillCheckCircle className='experience__details-icon'/>
              <div>
                <h4>Java</h4>
              </div>
            </article>
            <article className='experience__details'>
            <AiFillCheckCircle className='experience__details-icon'/>
              <div>
                <h4>C#</h4>
              </div>
            </article>
          </div>
        </div>
      </div>
      </section>
  )
}

export default Experience