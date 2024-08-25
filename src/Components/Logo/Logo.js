import React from 'react'
import H1 from '../H1/H1'
import P from '../P/P'
import logo from "../../images/logo.png";
import Image from '../Image/Image';
import './Logo.css'

export default function Logo() {
  return (
    <div className='containerLogo'>
    <Image src={logo} alt={"Logo"} className={"image"} />
    <div className="titleLogo">
      <H1 className={"h1"} content={"Gotto"} />
      <P className={"p"} content={"ONLINE JOB PORTAL"} />
    </div>
    </div>
  )
}
