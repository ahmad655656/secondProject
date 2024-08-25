import React, { useEffect, useMemo, useRef, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import sectionFixed from "../../images/sectionFixed.jpg";
import MainImage from "../../Components/MainImage/MainImage";
import "./Jop_listing.css";
import Flex from "../../Components/Flex/Flex";
import DisplayColumn from "../../Components/DisplayColumn/DisplayColumn";
import { FiMapPin, FiUser } from "react-icons/fi";
import Flex_Input from "../../Components/Flex_Input/Flex_Input";
import { FaHandHoldingDollar } from "react-icons/fa6";
import SelectInJop from "../../Components/SelectInJop/SelectInJop";
import { arr } from "../../Data";
import { BsFillLaptopFill } from "react-icons/bs";
import BigButton from "../../Components/BigButton/BigButton";
import Pupular_Keywords from "../../Components/Pupular_Keywords/Pupular_Keywords";
import Title from "../../Components/Title/Title";
import H1 from "../../Components/H1/H1";
import CircleHome from "../../Components/CircleHome/CircleHome";
import NewestJobs from "../../Components/NewestJobs/NewestJobs";
import LatestJobs from "../../Components/LatestJobs/LatestJobs";
import InternshipJobs from "../../Components/InternshipJobs/InternshipJobs";
import HighedSalaryJobs from "../../Components/HighedSalaryJobs/HighedSalaryJobs";

export default function Jop_listing() {
  const Newestjobs = useRef();
  const Latestjobs = useRef();
  const Highedsalaryjobs = useRef();
  const Internshipjobs = useRef();
  const [activeTab, setActiveTab] = useState("Newest Jobs");
  const [OptionNewestJobs, setOptionNewestJobs] = useState("Newest Jobs");
  const [OptionLatestJobs, setOptionLatestJobs] = useState("Latest Jobs");
  const handleTapClick = (tab) => {
    setActiveTab(tab);
  };
  const [OptionHighedSalaryJobs, setOptionHighedSalaryJobs] =
    useState("Highed Salary Jobs");
  const [OptionInternshipJobs, setOptionInternshipJobs] =
    useState("Internship Jobs");
  const documentNewest = () => {
    document.querySelector(".NewestJobs").style.display = "flex";
    document.querySelector(".TitleNewest").style.display = "block";
    document.querySelector(".LatestJobs").style.display = "none";
    document.querySelector(".TitleLatest").style.display = "none";
    document.querySelector(".HighedSalaryJobs").style.display = "none";
    document.querySelector(".TitleHighedSalaryJobs").style.display = "none";
    document.querySelector(".InternshipJobs").style.display = "none";
    document.querySelector(".TitleInternshipJobs").style.display = "none";
  };
  const documentLatest = () => {
    document.querySelector(".LatestJobs").style.display = "flex";
    document.querySelector(".TitleLatest").style.display = "block";
    document.querySelector(".NewestJobs").style.display = "none";
    document.querySelector(".TitleNewest").style.display = "none";
    document.querySelector(".HighedSalaryJobs").style.display = "none";
    document.querySelector(".TitleHighedSalaryJobs").style.display = "none";
    document.querySelector(".InternshipJobs").style.display = "none";
    document.querySelector(".TitleInternshipJobs").style.display = "none";
  };
  const documentHighedSalaryJobs = () => {
    document.querySelector(".HighedSalaryJobs").style.display = "flex";
    document.querySelector(".TitleHighedSalaryJobs").style.display = "block";
    document.querySelector(".NewestJobs").style.display = "none";
    document.querySelector(".TitleNewest").style.display = "none";
    document.querySelector(".LatestJobs").style.display = "none";
    document.querySelector(".TitleLatest").style.display = "none";
    document.querySelector(".InternshipJobs").style.display = "none";
    document.querySelector(".TitleInternshipJobs").style.display = "none";
  };
  const documentInternshipJobs = () => {
    document.querySelector(".InternshipJobs").style.display = "flex";
    document.querySelector(".TitleInternshipJobs").style.display = "block";
    document.querySelector(".NewestJobs").style.display = "none";
    document.querySelector(".TitleNewest").style.display = "none";
    document.querySelector(".NewestJobs").style.display = "none";
    document.querySelector(".TitleNewest").style.display = "none";
    document.querySelector(".LatestJobs").style.display = "none";
    document.querySelector(".TitleLatest").style.display = "none";
  };
  const moveToInternshipjobs = () => {
    Internshipjobs.current.scrollIntoView({
      behavior: "smooth",
    });
  };
  const moveToNewest = () => {
    Newestjobs.current.scrollIntoView({
      behavior: "smooth",
    });
  };
  const moveToLatest = () => {
    Latestjobs.current.scrollIntoView({
      behavior: "smooth",
    });
  };
  const moveToHighedSalaryJobs = () => {
    Highedsalaryjobs.current.scrollIntoView({
      behavior: "smooth",
    });
  };
  const handleSelect = (e) =>{
    switch (e){
      case "Newest Jobs": {
        moveToNewest();
        documentNewest();
        handleTapClick("Newest Jobs");
        break;
      }
      case "Latest Jobs":{
        moveToLatest();
        documentLatest();
        handleTapClick("Latest Jobs");
        break;
      }
      case "Highed Salary Jobs": {
        documentHighedSalaryJobs();
        moveToHighedSalaryJobs();
        handleTapClick("Highed Salary Jobs");
        break;
      }
      case "Internship Jobs": {
        documentInternshipJobs();
        moveToInternshipjobs();
        handleTapClick("Internship Jobs")
        break;
      }
      default: {
        moveToNewest();
        break;
      }
    }
  }
  useEffect(() => {
    switch (activeTab) {
      case "Newest Jobs": {
        moveToNewest();
        documentNewest();
        setOptionLatestJobs("Latest Jobs");
        setOptionHighedSalaryJobs("Highed Salary Jobs");
        setOptionInternshipJobs("Internship Jobs");
        setOptionNewestJobs("Newest Jobs");
        break;
      }
      case "Latest Jobs": {
        moveToLatest();
        documentLatest();
        setOptionLatestJobs("Newest Jobs");
        setOptionHighedSalaryJobs("Highed Salary Jobs");
        setOptionInternshipJobs("Internship Jobs");
        setOptionNewestJobs("Latest Jobs");
        break;
      }
      case "Highed Salary Jobs": {
        moveToHighedSalaryJobs();
        documentHighedSalaryJobs();
        setOptionLatestJobs("Latest Jobs");
        setOptionInternshipJobs("Internship Jobs");
        setOptionHighedSalaryJobs("Newest Jobs");
        setOptionNewestJobs("Highed Salary Jobs");
        break;
      }
      case "Internship Jobs": {
        documentInternshipJobs();
        moveToInternshipjobs();
        setOptionHighedSalaryJobs("Highed Salary Jobs");
        setOptionLatestJobs("Latest Jobs");
        setOptionInternshipJobs("Newest Jobs");
        setOptionNewestJobs("Internship Jobs");
        break;
      }
      default:
        moveToNewest();
    }
  }, [activeTab]);
   
  return (
    <DisplayColumn alignItems={"center"} textAlign={"center"} width={"100%"}>
      <MainImage
        pageName={"Jop"}
        title={"Jop_Listings"}
        padding={"400px"}
        textAlign={"center"}
        image={sectionFixed}
      />
      <DisplayColumn
        borderRadius={"20px"}
        gap={"50px"}
        width={"70%"}
        padding={"50px"}
        margin={"auto"}
        backgroundColor={"#499"}
      >
        <Title color={"black"}>Search your dream job</Title>
        <Flex background={"none"}>
          <Flex_Input
            widthInput={"500px"}
            padding={"20px 20px"}
            width={"610px"}
            placeholder={"Jop title"}
          >
            <FiUser />
          </Flex_Input>
          <Flex_Input
            widthInput={"500px"}
            padding={"20px 20px"}
            width={"610px"}
            placeholder={"Location"}
          >
            <FiMapPin />
          </Flex_Input>
        </Flex>
        <Flex width={"100%"} background={"none"}>
          <SelectInJop
            optionName={"Salary_Range"}
            option1={"$100-$300"}
            option2={"$500-$1000"}
            option3={"$1000-$5000"}
            option4={"$5000-$10000"}
            option5={"$10000-$50000"}
          >
            <FaHandHoldingDollar className="iconSelect" />
          </SelectInJop>
          <SelectInJop
            optionName={"Level"}
            option1={"Internship"}
            option2={"Junior"}
            option3={"Senior"}
            displayop5={"none"}
            displayop4={"none"}
          >
            <BsFillLaptopFill className="iconSelect" />
          </SelectInJop>
          <SelectInJop
            optionName={"Remote"}
            option1={"Full Time"}
            option2={"Contract"}
            option3={"Part Time"}
            displayop5={"none"}
            displayop4={"none"}
          >
            <BsFillLaptopFill className="iconSelect" />
          </SelectInJop>
        </Flex>
        <BigButton width={"100%"} content={"Search jop"} />
        <Pupular_Keywords
          title={"Pupular_keywords:"}
          button1={"Web design"}
          button2={"Marketing"}
          button3={"Customer support"}
        />
      </DisplayColumn>
      <DisplayColumn width={"100%"}>
        <Flex>
          <Title fontSize={"50px"}>Results of 30-65 of 1500 jobs</Title>
          <Flex>
            <H1 content={"Sort By:"} />
            <SelectInJop
            function={(e) =>{handleSelect(e.target.value)}}
              classList={"selectjopList"}
              optionName={OptionNewestJobs}
              option1={OptionLatestJobs}
              option2={OptionHighedSalaryJobs}
              option3={OptionInternshipJobs}
              displayop5={"none"}
              displayop4={"none"}
            />
          </Flex>
        </Flex>
        <div className="flexCardColumn">
          <div className="ccolumn">
            <span style={{ marginBottom: "100px" }} ref={Newestjobs}></span>
            <Title className={"TitleNewest"}>NewestJobs</Title>
            <NewestJobs className={"NewestJobs"} />
          </div>
          <div className="ccolumn">
            <span style={{ marginBottom: "100px" }} ref={Latestjobs}></span>
            <Title className={"TitleLatest"}>LatestJobs</Title>
            <LatestJobs className={"LatestJobs"} />
          </div>
          <div className="ccolumn">
            <span
              style={{ marginBottom: "100px" }}
              ref={Highedsalaryjobs}
            ></span>
            <Title className={"TitleHighedSalaryJobs"}>HighedSalaryJobs</Title>
            <HighedSalaryJobs className={"HighedSalaryJobs"} />
          </div>
          <div className="ccolumn">
            <span style={{ marginBottom: "100px" }} ref={Internshipjobs}></span>
            <Title className={"TitleInternshipJobs"}>InternshipJobs</Title>
            <InternshipJobs className={"InternshipJobs"} />
          </div>
        </div>

        <Flex padding={"100px"} width={"100%"}>
          <CircleHome
            function={() => handleTapClick("Newest Jobs")}
            width={"80px"}
            height={"80px"}
            className={
              activeTab === "Newest Jobs" ? "active" : "circle smallCircle"
            }
            content={"1"}
          ></CircleHome>
          <CircleHome
            function={() => handleTapClick("Latest Jobs")}
            width={"80px"}
            height={"80px"}
            className={
              activeTab === "Latest Jobs" ? "active" : "circle smallCircle"
            }
            content={"2"}
          ></CircleHome>
          <CircleHome
            function={() => handleTapClick("Highed Salary Jobs")}
            width={"80px"}
            height={"80px"}
            className={
              activeTab === "Highed Salary Jobs"
                ? "active"
                : "circle smallCircle"
            }
            content={"3"}
          ></CircleHome>
          <CircleHome
            function={() => handleTapClick("Internship Jobs")}
            width={"80px"}
            height={"80px"}
            className={
              activeTab === "Internship Jobs" ? "active" : "circle smallCircle"
            }
            content={"4"}
          ></CircleHome>
        </Flex>
      </DisplayColumn>
    </DisplayColumn>
  );
}
