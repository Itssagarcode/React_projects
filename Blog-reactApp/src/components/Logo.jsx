import React from 'react'
import logo from '../assets/logo.png'

function Logo({width = '50px'}) {
  return (
    <div>
      <img src={logo} alt="" />
      </div>
  )
}

export default Logo