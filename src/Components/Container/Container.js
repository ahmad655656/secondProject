import React from 'react'
import Home from '../../Pages/Home/Home'
import './Container.css'
import SectionFixed from '../../Section/SectionFixed/SectionFixed'
import Footer from '../../Section/Footer/Footer'
import Header from '../../Section/Header/Header'
export default function Container({children}) {
  return (
    <div className='MainContainer'>
      <Header />
      {children}
      <SectionFixed />
      <Footer />
    </div>
  )
}
