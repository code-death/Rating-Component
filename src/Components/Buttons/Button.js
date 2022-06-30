import './Button.css'
import { useState } from 'react'

const Button = props => {
  return (
    <button
      onClick={props.onClick}
      className={props.class}
      type={props.type}
      name={props.name}
      id={props.id}
    >
      {props.id}
    </button>
  )
}

export default Button
