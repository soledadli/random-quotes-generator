import React from 'react'
import {FaHeartbeat} from "react-icons/fa"

const Credit = () => {
  return (
    <div className='credit-container'>Created with <FaHeartbeat style={{  color: 'red', fontSize: '20px'}}/> by <a className='credit-link' href="https://github.com/soledadli" target='_blank' rel='author' rel="noopener noreferrer"
    >Soledad</a></div>
  )
}

export default Credit