import React from 'react'
import './DisplayColumn.css'
export default function DisplayColumn(props) {
  return (
    <div className={`displayColumn  ${props.className}`} style={{
        display: "flex",
        margin: `${props.margin}`,
        flexDirection: "column",
        alignItems: `${props.align}`,
        padding: `${props.padding}`,
        gap: `${props.gap}`,
        width: `${props.width}`,
        marginRight: `${props.marginRight}`,
        justifyContent: `${props.justifyContent}`,
        textAlign: `${props.textAlign}`,
        backgroundColor: `${props.backgroundColor}`,
        borderRadius: `${props.borderRadius}`,
      }}>
        {props.children}
    </div>
  )
}
