import React from 'react'
import './ButtonNonBorder.css'
export default function ButtonNonBorder(props) {
  return (
    <button onClick={props.function} className="buttonSecFTwo" style={{
      color: `${props.color}`,
      fontSize: `${props.fontSize}`,
      display: `${props.display}`,
    }}>
        {props.content}
    </button>
  )
}
