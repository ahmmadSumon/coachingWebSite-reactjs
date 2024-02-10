import React from 'react'
import '../button/button.css'
const Button = (props) => {
  return (
    <div>
        <button className='btn1'>{props.insideText}</button>
    </div>
  )
}

export default Button