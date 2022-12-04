import * as React from "react"
import { Link } from "gatsby"

const navStyles = {
  backgroundColor: "rgb(0,0,0,0.8)",
  width:"100%",
  WebkitBackdropFilter:"blur(10px)",
  backdropFilter:"blur(10px)",
}
const listStyles = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  alignItems: "center",
  maxWidth: "980px",
  listStyle: "none",
  padding: "8px 22px",
  margin: "auto"
}
const listItemStyles = {
  padding: "8px 20px",
  margin: 0,
  listStyle: "none"
}
const linkStyle = {
  fontSize: 15,
  color: "#f5f5f7",
  textDecoration: "none",
  margin: 0
}

const links = [
  {
    text: "About",
    url: "/about",
  },
  {
    text: "Schedule",
    url: "/schedule",
  },
  {
    text: "FAQ",
    url: "/faq",
  },
  {
    text: "PAR-Q",
    url: "/parq",
  },
  {
    text: "Contact",
    url: "/contact",
  }
]

export const Footer = (props) => {
  const flexDirection = props.isMobile ? 'column' : 'row'
  return (
    <footer>
      <nav style={navStyles}>
        <ul style={{...listStyles, flexDirection: flexDirection}}>
          <li key="copyright-statement" style={listItemStyles}>
            <span style={linkStyle}>Seven Fitness NI © 2022</span>
          </li>
          {links.map(link => (
            <li key={link.text} style={{ ...listItemStyles, color: link.color}}>
              <Link style={linkStyle} to={link.url}>{link.text}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </footer>
  )
}