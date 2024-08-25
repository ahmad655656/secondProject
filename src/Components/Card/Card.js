import React from 'react'
import H1 from '../H1/H1'
import Flex from '../Flex/Flex'
import { FiClock, FiMapPin } from 'react-icons/fi'
import P from '../P/P'
import { TbFilterDollar } from 'react-icons/tb'
import Button from '../Button/Button'
import Image from '../Image/Image'
import './Card.css'
export default function Card(props) {
  return (
    <div className="Card">
    <div className="CardLeft">
      <div className="imageCrd">
      <Image src={props.image} className={"imageCard"}/>
      </div>
      <div className="rightInLeft">
        <H1 className={"h1Featured"} content={props.title} />
        <Flex>
          <Flex>
          <FiMapPin className={"user"}  />
          <P className={"pHome"} content={props.content1} />
          </Flex>
          <Flex>
            <FiClock className={"user"} />
          <P className={"pHome"} content={props.content2} />
          </Flex>
          <Flex>
            <TbFilterDollar className={"user"} />
          <P className={"pHome"} content={props.content3} />
          </Flex>
        </Flex>
      </div>
    </div>
    <div className="CardRight">
     <Flex>
     <Button className={"firstButton"} content={props.content5} />
      <Button className={"twoButton"}  content={props.content6} />
     </Flex>
     <Button className={"lastButton"} content={"Apply now"} />
    </div>
  </div>
  )
}
