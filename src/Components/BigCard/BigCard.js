import React from "react";
import Image from "../Image/Image";
import image6 from '../../images/jobs/image6.jpg'
import Button from "../Button/Button";
import image7 from '../../images/logos/image7.png'
import H1 from "../H1/H1";
import P from "../P/P";
import Flex from "../Flex/Flex";
import { FiClock, FiMapPin } from "react-icons/fi";
import { TbFilterDollar } from "react-icons/tb";
import './BigCard.css'
export default function BigCard(props) {
  return (
    <div className="BigCard">
      <div className="imagec">
        <Image src={props.image1} />
        <div className="buttonsCard">
          <Button className={"firstButton"} content={props.level} />
          <Button className={"twoButton"} content={props.typeWork} />
        </div>
        <H1 className={"h1Featured"} content={props.title} />
        <div className="SecondImage">
          <Image src={props.image2} className={"img"} />
          <P className={"poneFeature"} content={props.company } />
        </div>
      </div>
      <div className="bottom">
        <div className="oneBottom">
          <Flex>
            <FiMapPin className={"user"} />
            <P className={"pHome"} content={props.location} />
          </Flex>
          <Flex>
            <FiClock className={"user"} />
            <P className={"pHome"} content={props.workTime} />
          </Flex>
        </div>
        <div className="endBottom">
          <Flex>
            <TbFilterDollar className={"user"} />
            <P className={"pHome"} content={props.salary} />
          </Flex>
          <Button className={"lastButton"} content={"Apply now"} />
        </div>
      </div>
    </div>
  );
}
