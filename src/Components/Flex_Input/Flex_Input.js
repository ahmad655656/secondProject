import React from 'react'
import Flex from '../Flex/Flex'
import { FiUser } from 'react-icons/fi'
import Input from '../Input/Input'

export default function Flex_Input(props) {
  return (
    <Flex padding={props.padding} width={props.width}>
    {props.children}
    <Input onChange={props.onChange} width={props.widthInput}  type={props.type} className={"inputHome"} placeholder={props.placeholder} />
  </Flex>
  )
}
