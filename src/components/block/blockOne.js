import * as React from "react"
import { Link } from "gatsby"

const blockStyle = {
  color: "#8954A8",
  fontWeight: "bold",
  fontSize: 16,
  height: '200px',
  padding: '100px'
}
const headingStyle = {
  padding: 0,
  marginBlock: 0
}
const linkStyle = {
  color: "#8954A8",
  fontWeight: "bold",
  fontSize: 16
}
const descriptionStyle = {
  color: "#232129",
  fontSize: 14,
}


export const BlockOne = (props) => {
  const block = props.block

  return (
    <div style={blockStyle}>
      <p style={headingStyle}>{block.text}</p>
      <p style={headingStyle}>{block.text}</p>
      <Link style={linkStyle} to={block.url}>{block.text}</Link>
      <p style={descriptionStyle}>{block.description}</p>
    </div>
  )
}