import React from 'react'
import H1 from '../H1/H1'
import Image from '../Image/Image'
import P from '../P/P'
import { FiStar } from 'react-icons/fi'
import './SectionCard.css'
export default function SectionCard(props) {
  return (
    <div className="sectionOne">
    <div className="topSection">
    <div className="leftSection">
    <Image src={props.image} className={"imageCard"} />
      <div className="rightInLeft">
  <H1 className={"h1Featured"} content={props.name} />
  <P content={props.jop} className={"pSlider"} />
      </div>
    </div>
      <div className="rightSection">
        <FiStar className="o" />
        <FiStar className="t" />
        <FiStar className="th" />
        <FiStar className="f" />
        <FiStar className="fi" />
      </div>
    </div>

    <P content={props.content} className={"paraSection"} />
    

    </div>
  )
}
