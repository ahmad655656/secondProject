import React from "react";
import DisplayColumn from "../../Components/DisplayColumn/DisplayColumn";
import MainImage from "../../Components/MainImage/MainImage";
import image3 from "../../images/image3.jpg";
import Flex from "../../Components/Flex/Flex";
import Title from "../../Components/Title/Title";
import './Jop_details.css'
import { FiClock, FiFacebook, FiMapPin, FiShare, FiShare2, FiTwitch, FiTwitter, FiWind } from "react-icons/fi";
import { FaCircleDollarToSlot, FaTableTennisPaddleBall } from "react-icons/fa6";
import ButtonNonBorder from "../../Components/ButtonNonBorder/ButtonNonBorder";
import H1 from "../../Components/H1/H1";
import P from "../../Components/P/P";
import Button from "../../Components/Button/Button";
import google from '../../images/logos/google.png'
import CircleHome from "../../Components/CircleHome/CircleHome";
import Image from "../../Components/Image/Image";

export default function Jop_details() {
  return (
    <DisplayColumn alignItems={"left"} textAlign={"left"} width={"100%"}>
      <MainImage
        pageName={"Jop"}
        title={"Jop_Details"}
        padding={"400px"}
        textAlign={"center"}
        image={image3}
      ></MainImage>
      <Flex justifyContent={"space-between"} padding={"100px"} width={"2000px"}>
        <DisplayColumn width={"1000px"}>
          <Title fontSize={"40px"}>Technical Lead</Title>
          <Flex gap={"0px"}>
            <Flex gap={"10px"} width={"200px"}>
              <FiMapPin style={{ fontSize: "50px" }} />
              Kuala, Malaysia
            </Flex>
            <Flex gap={"10px"} width={"200px"}>
              <FiClock style={{ fontSize: "50px" }} />
              10 hours ago
            </Flex>
            <Flex gap={"10px"} width={"200px"}>
              <FaCircleDollarToSlot style={{ fontSize: "50px" }} />
              $20k
            </Flex>
            <Flex>
              <ButtonNonBorder content={"Internship"} color={"#355"} />
              <ButtonNonBorder content={"Freelance"} color={"#355"} />
            </Flex>
          </Flex>
          <hr />
          <H1 color={"#244"} content={"Job Description"} />
          <P
            fontSize={"25px"}
            content={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            }
          />
          <H1 color={"#244"} content={"The Role"} />
          <P
            fontSize={"25px"}
            content={
              "Benefits: Lorem Ipsum dolor sit amet, consectetur adipsicing kengan omeg kohm tokito adipcingi elitGood salary: Lorem Ipsum dolor sit amet, consectetur adipsicing kengan omeg kohm tokito"
            }
          />
          <H1 color={"#244"} content={"Requirements"} />
          <ul
            style={{
              marginLeft: "50px",
              fontSize: "25px",
              color: "#488",
            }}
          >
            <li>Strong knowledge in computing skill</li>
            <li>Minimum 5 years of working experiences consectetur omeg</li>
            <li>Excellent interpersonal skills</li>
          </ul>
          <hr />
          <Flex>
            <Flex>
            <Button className={"buttonHome"} content={"Apply now"} />
            <Button className={"buttonHome"} content={"Save this jop"} />
            </Flex>
            <Flex color={"oranged"}><H1 content={"Share:"} />
                <FiFacebook className="iconHover"  />
                <FiTwitter className="iconHover" />
                <FiShare2 className="iconHover" />
            </Flex>
          </Flex>
        </DisplayColumn>
        <DisplayColumn gap={"50px"} width={"500px"} padding={"40px"} className={"cardBoxShadow"}>
           <Flex>
           <CircleHome height={"100px"} width={"100px"}>
                <Image className={"imageCard"} src={google}/>
            </CircleHome>
            <H1 content={"Google"} />
           </Flex>
           <DisplayColumn >
            <H1 fontSize={"40px"} content={"About the Company"} />
            <P fontSize={"30px"} content={"Lorem ipsum dolor sit amet, consectetur elit sed do eiusmod tempor incididunt labore."} />
            <H1 fontSize={"40px"} content={"Contact Information"} />
            <ul  style={{
              marginLeft: "50px",
              fontSize: "20px",
              color: "#488",
            }}>
                <li>www.jobbportal.com</li>
                <li>305-240-9671</li>
                <li>info@jobportal.co</li>
            </ul>
           </DisplayColumn>
        </DisplayColumn>
      </Flex>
    </DisplayColumn>
  );
}
