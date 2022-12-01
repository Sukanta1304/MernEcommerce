import React from 'react'
import Image from '../assets/logo.jpg';
function Logo() {
  return (
    <div>
        <img src={Image} alt="" style={{width:"70px",borderRadius:"50%"}} />
    </div>
  )
}

export default Logo