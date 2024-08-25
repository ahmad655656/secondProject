import React from 'react'
import './Flex.css'
export default function Flex(props) {
  return (
    <div className={`flex ${props.className}`} style={{
      width: `${props.width}`,
      display: `${props.display}`,
      flexDirection: `${props.flexDirection}`,
      gap: `${props.gap}`,
      padding: `${props.padding}`,
      justifyContent: `${props.justifyContent}`,
      backgroundColor: `${props.backgroundClolor}`,
      background: `${props.background}`,
      overflowX: `${props.overflowX}`,
    }}>
      {props.children}
    </div>
  )
}
