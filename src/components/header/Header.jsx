import React from 'react'
import './header.css'
import CVM from './CVM'
import ME from '../../assets/me.png'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hi I'm</h5>
        <h1>Sona Rahimova</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CVM/>

        <div className='me'>
          <img src={ME} alt=''/>
        </div>

        <a href='#contact' className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header