import React from "react";
import H1 from "../../Components/H1/H1";
import P from "../../Components/P/P";
import {
  FiCalendar,
  FiMapPin,
  FiShoppingCart,
  FiUser,
  FiUsers,
  FiVideo,
} from "react-icons/fi";
import home from "../../images/home.jpg";
import "./Home.css";
import { info } from "../../Data";
import image5 from "../../images/image5.jpg";
import Button from "../../Components/Button/Button";
import Flex from "../../Components/Flex/Flex";
import { AiFillGoogleSquare } from "react-icons/ai";
import Image from "../../Components/Image/Image";
import image3 from "../../images/image3.jpg";
import image4 from "../../images/image4.jpg";
import ButtonNonBorder from "../../Components/ButtonNonBorder/ButtonNonBorder";
import DivImage from "../../Components/DivImage/DivImage";
import CircleHome from "../../Components/CircleHome/CircleHome";
import Card from "../../Components/Card/Card";
import BigContainerCard from "../../Components/BigContainerCard/BigContainerCard";
import MainImage from "../../Components/MainImage/MainImage";
import Title from "../../Components/Title/Title";
import HappyCustomers from "../../Components/HappyCustomers/HappyCustomers";
import BigButton from "../../Components/BigButton/BigButton";
import Pupular_Keywords from "../../Components/Pupular_Keywords/Pupular_Keywords";
import Flex_Input from "../../Components/Flex_Input/Flex_Input";
export default function Home() {
  return (
    <div className="home">
      <MainImage displayButton={"none"} image={home}>
        <div className="leftRightHome">
          <div className="leftHome">
            <P
              className={"pHome"}
              content={"Are you looking for your dream job?"}
            />
            <Title>Online Platform.Best Job portal</Title>
            <Button className={"buttonHome"} content={"Browse Categories"} />
          </div>
          <div className="rightHome">
            <P content={"Search your dream job"} className={"p2Home"} />
            
            <Flex background={"none"}>
          <Flex_Input widthInput={"500px"} padding={"20px 20px"} width={"350px"} placeholder={"Jop title"}>
                <FiUser />
          </Flex_Input>
          <Flex_Input widthInput={"500px"} padding={"20px 20px"} width={"350px"} placeholder={"Location"}>
                <FiMapPin />
          </Flex_Input>
        </Flex>
            <BigButton content={"Find a jop"} />
           <Pupular_Keywords title={"Pupular_keywords:"} button1={"Web design"} button2={"Marketing"} button3={"Customer support"} />
          </div>
        </div>
      </MainImage>
      <div className="HomeSecTwo">
        <Title>Browse by Categories</Title>
        <div className="disFlex">
          <CircleHome className={"circle"} after={"circleAfter1"} content={"Web design"}>
            <div className="topcircle">
              <FiCalendar />
            </div>
          </CircleHome>

          <CircleHome
            className="circle"
            after={"circleAfter2"}
            content={"Marketing"}
          >
            <div className="topcircle">
              <FiShoppingCart />
            </div>
          </CircleHome>

          <CircleHome className={"circle"} 
            
            after={"circleAfter3"}
            content={"Vedio"}
          >
            <div className="topcircle">
              <FiVideo />
            </div>
          </CircleHome>
          <CircleHome 
            className={"circle"} 
            after={"circleAfter4"}
            content={"Websites"}
          >
            <div className="topcircle">
              <AiFillGoogleSquare />
            </div>
          </CircleHome>
          <CircleHome
            className={"circle"} 
            after={"circleAfter5"}
            content={"Customer Support"}
          >
            <div className="topcircle">
              <FiUsers />
            </div>
          </CircleHome>
        </div>
      </div>
      <div className="HomeSecThree">
        <DivImage className={"oneThree"} image={image3}>
          <span className="span">
            <H1 className={"h1span"} content={"Julia Ward"} />
            <P className={"pspan"} content={"Investor"} />
          </span>
        </DivImage>
        <div className="TwoThree">
          <H1 className={"h1Home"} content={"Introduction Gotto"} />
          <P
            className={"pHome"}
            content={
              "Lorem Ipsum dolor sit amet, consectetur adipsicing kengan adipsicing kengan omeg kohm tokito adipcingi elit eismuod larehai"
            }
          />
          <div className="bottomHThree">
            <Button content={"Get to now us"} className={"buttonHome"} />
            <ButtonNonBorder
              content={"Explore Jobs"}
              className={"buttonSecFTwo"}
            />
          </div>
        </div>
        <DivImage image={image4} className={"ThreeThree"} />
      </div>
      <div className="featuredJobs">
        <div className="onrFeatured">
          <Title>Featured Jobs</Title>
          <P
            className={"pHome"}
            content={`Lorem Ipsum dolor sit eismuod larehai,Lorem Ipsum dolor sit amet, consectetur adipsicing kengan omeg kohm tokito adipcingi elit eismuod larehai.`}
          />
        </div>
        <div className="twoFeatured">
          {info.map((each) => {
            return (
              <Card
                title={each.title}
                content1={each.country}
                content2={each.hours}
                image={each.image}
                content3={each.salary}
                content5={each.level}
                content6={each.workTime}
              />
            );
          })}
        </div>
        <div className="threeFeature">
          <div className="leftThreeF">
            <div className="innerLeft">
              <H1
                className={"titleInner"}
                content={"Gotto helps you an easier way to get new job"}
              />
              <P
                className={"paraInner"}
                content={
                  "You are not allowed contact us for more info. Thank you kohm tokito adipcingi elit eismuod larehai,Lorem Ipsum dolor sit amet, consectetur adipsicing kengan omeg kohm tokito adipcingi elit eismuod larehai,Lorem Ipsum dolor sit amet, consectetur adipsicing kengan omeg kohm tokito adipcingi elit eismuod larehai"
                }
              />
              <div className="flexFollwer">
                <H1 className={"M"} content={"15M"} />
                <H1 className={"M"} content={"500K"} />
              </div>
            </div>
          </div>
          <div className="rightThreeF">
            <Image src={image5} className={"imageright"} />
          </div>
        </div>
      </div>
      <div className="RecentJobs">
        <div className="start">
          <H1 content={"Recent Jobs"} className={"startH1"} />
          <P
            content={
              "Over 10k opening jobs Lorem Ipsum dolor sit amet, consectetur adipsicing kengan omeg kohm tokito adipcingi elit eismuod larehai"
            }
            className={"startP"}
          />
        </div>
        <BigContainerCard />
      </div>
      <HappyCustomers />
    </div>
  );
}
