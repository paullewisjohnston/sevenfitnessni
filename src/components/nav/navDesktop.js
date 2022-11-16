import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const navStyles = {
  backgroundColor: "rgb(0,0,0,0.8)",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
  width:"100%",
  position:"fixed",
  top: 0,
  WebkitBackdropFilter:"blur(10px)",
  backdropFilter:"blur(10px)"
}
const listStyles = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  maxWidth: "980px",
  height:"48px",
  listStyle: "none",
  padding: "0px 22px",
  margin: "auto"
}
const listItemStyles = {
  justifyContent: "center",
  padding: "0px 8px",
  margin: 0,
  listStyle: "none"
}
const linkStyle = {
  color: "#f5f5f7",
  fontSize: 14,
  textDecoration: "none",
  margin: 0
}

export const NavDesktop = (props) => {
  return (
    <React.Fragment>
      <nav style={navStyles}>
        <ul style={listStyles}>
          <li key="home-link-logo" style={listItemStyles}>
            <Link style={linkStyle} to="/"><StaticImage src="../../images/icon.png" alt="logo" width={24} height={24}/></Link>
          </li>
          {props.links.map(link => (
            <li key={link.text} style={{ ...listItemStyles, color: link.color}}>
              <Link style={linkStyle} to={link.url}>{link.text}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </React.Fragment>
  )
}