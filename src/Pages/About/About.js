import React from "react";
import MainImage from "../../Components/MainImage/MainImage";
import Aboutt from "../../images/site-header/About.jpg";
import Title from "../../Components/Title/Title";
import DisplayColumn from "../../Components/DisplayColumn/DisplayColumn";
import Flex from "../../Components/Flex/Flex";
import P from "../../Components/P/P";
import "./About.css";
import image4 from "../../images/image4.jpg";
import { Link, useNavigate } from "react-router-dom";
import Container from "../../Components/Container/Container";
import H1 from "../../Components/H1/H1";
import ButtonNonBorder from "../../Components/ButtonNonBorder/ButtonNonBorder";
import Button from "../../Components/Button/Button";
import DivImage from "../../Components/DivImage/DivImage";
import Card from "../../Components/Card/Card";
import Image from "../../Components/Image/Image";
import { FiCalendar } from "react-icons/fi";
import CircleHome from "../../Components/CircleHome/CircleHome";
import CardAbout from "../../Components/CardAbout/CardAbout";
import HappyCustomers from "../../Components/HappyCustomers/HappyCustomers";
export default function About() {
 
  return (
    <div className="about">
    
      <MainImage padding={"400px"} textAlign={"center"} image={Aboutt} title={"About_Gotto"} pageName={"About"} />
      <Flex className={"PhotoPara"} justifyContent={"space-between"}  width={"1200px"}>
        <DisplayColumn width={"500px"} margin={"20px"} gap={"25px"} >
          <H1 className={"twopara"} content={"Introducing Gotto Job"} />
          <P className={"threepara"} content={"Get hired. Get your new job"} />
          <P
            className={"fourpara"}
            content={
              "Thank you for visiting our Gotto Job website.Lorem Ipsum dolor sit amet, consectetur adipsicing kengan omeg kohm tokito adipcingi elit eismuod larehai"
            }
          />
          <Flex>
          <Button className={"buttonHome buttonw"} content={"Explore Services"} />
          <ButtonNonBorder fontSize={"40px"} color={"black"} content={"Contact"} />
          </Flex>
        </DisplayColumn>
        <DivImage className={"imageone"} image={image4}>
          <span className="span">
           <Flex width={"80px"} gap={"20px"} backgroundClolor={"#499"}>
           <H1 className={"h1span"} content={"20"} />
            <P className={"pspan"} content={"years of experience"} />
           </Flex>
          </span>
        </DivImage>
      </Flex>
      <DivImage className={"oneAbout"}>
      <Title>
      We deliver best services
      </Title>
      <Flex justifyContent={"center"} width={"1500px"} gap={"100px"}>
        <CardAbout />
      </Flex>
      </DivImage>
      <HappyCustomers marginTop={"200px"} />
    </div>
  );
}
