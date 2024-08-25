import React from 'react'
import MainImage from '../../Components/MainImage/MainImage'
import image12 from '../../images/jobs/image12.jpg'
import './Contact.css'
import DisplayColumn from '../../Components/DisplayColumn/DisplayColumn'
import Title from '../../Components/Title/Title'
import P from '../../Components/P/P'
import Input from '../../Components/Input/Input'
import Flex from '../../Components/Flex/Flex'
import ButtonNonBorder from '../../Components/ButtonNonBorder/ButtonNonBorder'
import BigButton from '../../Components/BigButton/BigButton'
import { FaLocationDot, FaLocationPin, FaPhone } from 'react-icons/fa6'
import H1 from '../../Components/H1/H1'
export default function Contact() {
  return (
    <div className='contact'>
             <MainImage padding={"400px"} textAlign={"center"} image={image12} title={"Contact"} pageName={"Contact"} />
            <DisplayColumn align={"center"} textAlign={"center"} justifyContent={"center"} padding={"50px"} width={"500px"}>
                <Title fontSize={"40px"}>Contact With Us</Title>
                <P className={"paragraph"} content={"If you have any questions please fell free to contact with us."} />
               <Flex padding={"0px"}>
               <Input width={"300px"} placeholder={"Name"} className={"ContactInput"}/>
                <Input width={"300px"} type={"email"} placeholder={"Email"} className={"ContactInput"}/>
               </Flex>
             <Flex padding={"0px"}>
             <Input width={"300px"} placeholder={"Phone"} className={"ContactInput"}/>
                <Input width={"300px"} placeholder={"Subject"} className={"ContactInput"}/>
             </Flex>
                <Input  width={"300px"} placeholder={"Your Message"} className={"ContactInput"}/>
                <BigButton content={"send"} color={"black"} />
                <Flex>
               <input style={{width: "35px", height: "35px",}} id='1' type="checkbox" />
                <label for="i">Do you want to subscribe our Newsletter ?</label>
                </Flex>
            </DisplayColumn>
            <Flex>
                <Flex className={"information"} width={"500px"} gap={"10px"}>
                    <FaPhone style={{fontSize: "30px"}} />
                    <DisplayColumn gap={"5px"}>
                        <P content={"+963 982 386 322"} />
                        <P content={"info@company.com"} />
                    </DisplayColumn>
                </Flex>
                <Flex className={"information"} width={"500px"} gap={"10px"}>
                    <FaLocationDot style={{fontSize: "30px"}} />
                    <DisplayColumn gap={"5px"}>
                        <P content={"2 Fir e Brigade Road"} />
                        <P content={"Tartus, AlsheqkBadr"} />
                    </DisplayColumn>
                </Flex>
            </Flex>
    </div>
  )
}
