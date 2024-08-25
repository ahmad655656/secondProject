import React from 'react'

export default function Button(props) {
  return (
    <button style={{width: `${props.width}`}} className={props.className}>
      {props.content}
      {props.children}
    </button>
  )
}
