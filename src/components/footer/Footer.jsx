import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>

    <div className='footer__socials'>
        <a href='https://www.linkedin.com/in/sonarahimova/' target="_blank"><BsLinkedin/></a>
        <a href='https://github.com/suay-selay' target="_blank"><BsGithub/></a>
    </div>

      <a href='#' className='footer__logo'>Sona Rahimova</a>
    
      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      
    </footer>
  )
}

export default Footer