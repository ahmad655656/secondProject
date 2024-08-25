import React from "react";
import H1 from "../../Components/H1/H1";
import P from "../../Components/P/P";
import "./SectionFixed.css";
import Button from "../../Components/Button/Button";
import sectionFixed from "../../images/sectionFixed.jpg";

import FlexColumn from "../../Components/FlexColumn/FlexColumn";
import ButtonNonBorder from "../../Components/ButtonNonBorder/ButtonNonBorder";
export default function SectionFixed() {
  return (
    <div className="sectionFixed">
      <div
        className="Top"
        style={{
          background: `url(${sectionFixed})`,
          backgroundPosition: "top",
          backgroundSize: "cover",
          opacity: "0.85",
        }}
      >
        <div className="containersecF">
          <div className="leftSecF">
            <H1 className={"h1SecFixed"} content={"Over 10k opening jobs"} />
            <P
              className={"pSecFixed"}
              content={
                "Lorem Ipsum dolor sit amet,larehai,Lorem Ipsum dolor sit amet, consectetur adipsicing kengan omeg kohm tokito adipcingi elit eismuod larehai,Lorem Ipsum dolor sit amet, consectetur adipsicing kengan omeg kohm tokito adipcingi elit eismuod larehai"
              }
            />
          </div>
          <div className="rightSecF">
            <Button className={"buttonSecF"} content={"Create an account"} />
            <ButtonNonBorder className={"buttonSecFTwo"} content={"Post a job"} />
          </div>
        </div>
      </div>
      <div className="Bottom">
    <div className="oneBottom">
            <FlexColumn />
      </div>
      </div>
    </div>
  );
}
