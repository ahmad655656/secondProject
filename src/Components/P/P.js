import React from 'react'

export default function P(props) {
  return (
    <p className={props.className} style={{fontSize: `${props.fontSize}`}}> 
      {props.content}
    </p>
  )
}
