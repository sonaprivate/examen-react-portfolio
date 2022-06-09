import React from 'react'
import CV from '../../assets/cv.pdf'

const CVM = () => {
  return (
    <div className='cvm'>
        <a href={CV} download className='btn'>Download CV</a>
    </div>
  )
}

export default CVM