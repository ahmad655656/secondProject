import React from 'react'
import './Footer.css'
import P from '../../Components/P/P'
import Button from '../../Components/Button/Button'
import { FiArrowUp, FiFacebook, FiInstagram, FiLinkedin, FiTwitter, FiYoutube } from 'react-icons/fi'
export default function Footer() {
  const moveToTop = () =>{
    window.scrollTo(0,0);
  }
  return (
    <div className='containerFooter'>
      <div className='leftFooter'>
       <div className='one'>
       <P content={"Copyright © Gotto Job 2024"}/>
        <P className={"pFooter"}  content={"Privacy policy"}/>
        <P className={"pFooter"}  content={"Terms"}/>
       </div>
       <div className='two'>
        <Button className={"buttonFooter"} content={<FiFacebook />} /> 
        <Button className={"buttonFooter"} content={<FiTwitter />} /> 
        <Button className={"buttonFooter"} content={<FiLinkedin />} /> 
        <Button className={"buttonFooter"} content={<FiInstagram />} /> 
        <Button className={"buttonFooter"} content={<FiYoutube />} /> 
       </div>
      </div>
      <div className='rightFooter'>
        <div className='one'>
        <P content={"Design:"} className={"p2Footer"} />
        <Button content={"Tooplate"} className={"buttonTwo"} />
        </div>
        <div className='two'>
            <FiArrowUp onClick={moveToTop} />
        </div>
      </div>
    </div>
  )
}
