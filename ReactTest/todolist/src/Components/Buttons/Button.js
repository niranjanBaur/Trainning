import React from 'react'
import './Button.css'

export default function Button(props) {

  return (
    <div>
        <button type='button' onClick={props.onClick}>Submit</button>
    </div>
  )
}
