import React from "react";
import DisplayColumn from "../DisplayColumn/DisplayColumn";
import CircleHome from "../CircleHome/CircleHome";
import { FiCalendar, FiShoppingBag, FiVideo } from "react-icons/fi";
import H1 from "../H1/H1";
import P from "../P/P";
const ArrayCard = [{
    id: 0,
    icon: <FiCalendar className="icon" />,
    title: "Website design",
    paragraph: "Lorem Ipsum dolor sit amet,Lorem Ipsum dolor sit amet, consectetur adipsicing kengan omeg kohm tokito adipcingi elit eismuod larehai,Lorem Ipsum dolor sit amet,",
},
{
    id: 1,
    icon: <FiShoppingBag className="icon" />,
    title: "Marketing",
    paragraph: "Lorem Ipsum dolor sit amet,Lorem Ipsum dolor sit amet, consectetur adipsicing kengan omeg kohm tokito adipcingi elit eismuod larehai",
},
{
    id: 2,
    icon: <FiVideo className="icon" />,
    title: "Video",
    paragraph: "Lorem Ipsum dolor sit amet,Lorem Ipsum dolor sit amet, consectetur adipsicing kengan omeg kohm tokito adipcingi elit eismuod larehai",
},

]
export default function CardAbout(props) {
  return (
   <>
   
   <DisplayColumn
      className={"after"}
      justifyContent={"center"}
      textAlign={"center"}
      width={"500px"}
      gap={"50px"}
      align={"center"}
    >
      <CircleHome className={"circleCard"}>
        {ArrayCard[0].icon}
      </CircleHome>
      <DisplayColumn
        gap={"20px"}
        width={"80%"}
        align={"center"}
        margin={"20px"}
      >
        <H1 className={"hcard"} content={ArrayCard[0].title} />
        <P
          className={"pcard"}
          content={
            ArrayCard[0].paragraph
          }
        />
      </DisplayColumn>
    </DisplayColumn>
     <DisplayColumn
     className={"afterActive"}
     justifyContent={"center"}
     textAlign={"center"}
     width={"500px"}
     gap={"50px"}
     align={"center"}
   >
     <CircleHome className={"circleCard"}>
       {ArrayCard[1].icon}
     </CircleHome>
     <DisplayColumn
       gap={"20px"}
       width={"80%"}
       align={"center"}
       margin={"20px"}
     >
       <H1 className={"hcard"} content={ArrayCard[1].title} />
       <P
         className={"pcard"}
         content={
           ArrayCard[1].paragraph
         }
       />
     </DisplayColumn>
   </DisplayColumn>
   <DisplayColumn
     className={"after"}
     justifyContent={"center"}
     textAlign={"center"}
     width={"500px"}
     gap={"50px"}
     align={"center"}
   >
     <CircleHome className={"circleCard"}>
       {ArrayCard[2].icon}
     </CircleHome>
     <DisplayColumn
       gap={"20px"}
       width={"80%"}
       align={"center"}
       margin={"20px"}
     >
       <H1 className={"hcard"} content={ArrayCard[2].title} />
       <P
         className={"pcard"}
         content={
           ArrayCard[2].paragraph
         }
       />
     </DisplayColumn>
   </DisplayColumn>
   </>
  );
}
