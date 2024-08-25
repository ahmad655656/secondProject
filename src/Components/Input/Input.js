import React from 'react'

export default function Input(props) {
  return (
    <input onChange={props.onChange} value={props.value} style={{width: `${props.width}`}} type={props.type} className={props.className} placeholder={props.placeholder} />
  )
}
