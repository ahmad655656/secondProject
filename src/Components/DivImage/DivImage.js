import React from 'react'
import './DivImage.css'
export default function DivImage(props) {
  return (
    <div className={`divImage ${props.className}`} style={{
        background: `url(${props.image})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
    }}>
      {props.children}
    </div>
  )
}
