import React, {useState} from 'react'
import {BsFillMoonFill, BsFillSunFill} from 'react-icons/bs'

const ChangeColor = ( {tgChange}) => {

  return (
    <div>
    <div className='color-container'>
      <input type='checkbox' className='checkbox' id="chk" onChange={tgChange}></input>
      <label htmlFor="chk" className="label">
        <BsFillMoonFill style={{color: 'yellow'}}/>
        <BsFillSunFill style={{color: "yellow"}}/>
        <div className="ball"></div>
      </label>
      </div>  
    </div>
  )
}

export default ChangeColor