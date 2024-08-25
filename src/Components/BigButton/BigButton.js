import React from 'react'
import Button from '../Button/Button'
import './BigButton.css'
export default function BigButton(props) {
  return (
    <Button width={props.width} className={"buttonTwoHome"} content={props.content} />
    
  )
}
