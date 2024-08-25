import React from 'react'
import './MainImage.css'
import DisplayColumn from '../DisplayColumn/DisplayColumn'
import Title from '../Title/Title'
import Flex from '../Flex/Flex'
import ButtonNonBorder from '../ButtonNonBorder/ButtonNonBorder'
import { useNavigate } from 'react-router-dom'
import H1 from '../H1/H1'

export default function MainImage(props) {
  const navigate = useNavigate();
const gotoHome = () =>{
  navigate('/')
}
  return (
    <div className="containerHome"
    style={{
      background: `url(${props.image})`,
      backgroundPosition: "top",
      backgroundSize: "cover",
      backgroundAttachment: "scroll",
    }}
  >
    <div className="opacity" style={{
      textAlign: `${props.textAlign}`,
      padding: `${props.padding}`,
       }}>
        <DisplayColumn margin={"auto"} gap={"40px"} alignItems={"center"}>
          <Title color={"white"}>{props.title}</Title>
          <Flex display={props.displayButton} >
          <ButtonNonBorder function={gotoHome} fontSize={"40px"} color={"black"} content={"Home"} />/<H1 className="onepara" content={props.pageName} />
          </Flex>
        </DisplayColumn>
        {props.children}
        </div>
    </div>
  )
}
