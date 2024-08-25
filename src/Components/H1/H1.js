import React from 'react'

export default function H1(props) {
  return (
    <h1 className={props.className} style={{
      fontSize: `${props.fontSize}`,
      color: `${props.color}`,
    }}>
      {props.content}
    </h1>
  )
}
