import * as React from "react"
import { Link } from "gatsby"

const blockStyle = {
  color: "#8954A8",
  fontWeight: "bold",
  fontSize: 16,
  height: "400px",
  padding: "100px",
  // margin: "15px 0px"
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


export const BlockTwo = (props) => {
  const block = props.block

  return (
    <div style={{...blockStyle, background:block.color}}>
      <Link style={linkStyle} to={block.url}>BLOCK 2</Link>
      <Link style={linkStyle} to={block.url}>{block.text}</Link>
      <p style={descriptionStyle}>{block.description}</p>
    </div>
  )
}