import React from 'react'
import './CircleHome.css'
import Button from '../Button/Button'
export default function CircleHome(props) {
  return (
    <div key={props.key} onDoubleClick={props.function2} onClick={props.function} className={` ${props.className} ${props.after}`} style={{
      width: `${props.width}`,
      height: `${props.height}`,
      padding: `${props.padding}`,
    }}>
    {props.children}
    <Button className={"buttonHomesecTwo"} content={props.content} />
  </div>

  )
}
