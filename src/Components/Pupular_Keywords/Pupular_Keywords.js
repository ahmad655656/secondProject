import React from 'react'
import P from '../P/P'
import Button from '../Button/Button'

export default function Pupular_Keywords(props) {
  return (
    <div className="buttons">
              <P className={"p3Home"} content={props.title} />
              <Button className={"buttonThreeHome"} content={props.button1} />
              <Button className={"buttonThreeHome"} content={props.button2} />
              <Button
                className={"buttonThreeHome"}
                content={props.button3}
              />
            </div>
  )
}
