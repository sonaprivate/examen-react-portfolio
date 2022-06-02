import React from 'react'
import CV from '../../assets/cv.pdf'

const CVM = () => {
  return (
    <div className='cvm'>
        <a href={CV} download className='btn'>Download CV</a>
        <a href='#contact' className='btn btn-primary'>Message Me</a>
    </div>
  )
}

export default CVM