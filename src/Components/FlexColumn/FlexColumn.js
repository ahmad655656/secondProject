import React from 'react'
import Flex from '../Flex/Flex'
import { FiMap, FiMessageSquare, FiPhoneCall, FiSend, FiUser } from 'react-icons/fi'
import P from '../P/P'
import Logo from '../Logo/Logo'
import './FlexColumn.css'
import H1 from '../H1/H1'
import Input from '../Input/Input'
import DisplayColumn from '../DisplayColumn/DisplayColumn'
export default function FlexColumn(props) {
  return (
    <div className="rowColumns">
      {props.children}
   <DisplayColumn>
    <Logo />
    <Flex>
    <FiMap />
    <P className={"pFlex"} content={"www.jobbportal.com"} />
    </Flex>
    <Flex>
    <FiPhoneCall />
    <P className={"pFlex"} content={" 305-240-9671"} />
    </Flex>
    <Flex>
    <FiMessageSquare />
    <P className={"pFlex"} content={" info@jobportal.co"} />
    </Flex>
    </DisplayColumn>
    <DisplayColumn>
    <H1 content={"Company"} />
    <P className={"pFlex"} content={"About"} />
    <P className={"pFlex"} content={"Blog"} />
    <P className={"pFlex"} content={"Jobs"} />
    <P className={"pFlex"} content={"Contact"} />
    </DisplayColumn>
    <DisplayColumn>
    <H1 content={"Resources"} />
    <P className={"pFlex"} content={"Guide"} />
    <P className={"pFlex"} content={"How it works"} />
    <P className={"pFlex"} content={"Salary Tool"} />
    </DisplayColumn>
    <DisplayColumn>
    <H1 content={"Newsletter"} />
    <div className='inner'>
        <H1 className={"h1Inner"} content={"Get notified jobs news"} />
        <Flex>
        <FiUser className='user' />
        <Input className={"input"} placeholder={"yourname@gmail.com"} />
        <FiSend className='send' />
        </Flex>
    </div>
    </DisplayColumn>
    </div>
  )
}
