import React from 'react'

export default function Image(props) {
  return (
    <img style={{
      width: `${props.width}`,
      height: `${props.height}`,
    }} src={props.src} alt={props.alt} className={props.className} />
  )
}
