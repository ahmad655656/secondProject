import React from 'react'
import './Title.css'
export default function Title(props) {
  return (
    <h1 style={{
        color: `${props.color}`,
        fontSize: `${props.fontSize}`,
    }} className={`publicTitle ${props.className}`}>
      {props.children}
    </h1>
  )
}
