import React from 'react'
import Flex from '../Flex/Flex'

export default function SelectInJop(props) {
  return (
    <Flex padding={"10px"} width={"400px"}>
    {props.children}
  <select value={props.value} onChange={props.function} className={`select ${props.className}`}>
  <option value={props.value1} key="">{props.optionName}</option>
    <option value={props.value2} key="">{props.option1}</option>
    <option value={props.value3} key="">{props.option2}</option>
    <option style={{display: `${props.displayop3}`}} value={props.value4} key="">{props.option3}</option>
    <option style={{display: `${props.displayop4}`}} value="" key="">{props.option4}</option>
    <option style={{display: `${props.displayop5}`}} value="" key="">{props.option5}</option>
   </select>
  </Flex>
  )
}
