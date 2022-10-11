import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const navStyles = {
  backgroundColor: "rgb(0,0,0,0.8)",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
  width:"100%",
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
  fontSize: 12,
  textDecoration: "none",
  margin: 0
}


const links = [
  {
    text: "Home",
    url: "/",
  },
  {
    text: "Test",
    url: "/test",
  },
  {
    text: "Home",
    url: "/",
  },
  {
    text: "Test",
    url: "/test",
  }
]

const Layout = ({children}) => {
  return (
    <React.Fragment>
      <nav style={navStyles}>
        <ul style={listStyles}>
          <li key="home-link-logo" style={listItemStyles}>
            <Link style={linkStyle} to="/"><StaticImage src="../images/icon.png" alt="logo" width={24} height={24}/></Link>
          </li>
          {links.map(link => (
            <li key={link.url} style={{ ...listItemStyles, color: link.color}}>
              <Link style={linkStyle} to={link.url}>{link.text}</Link>
            </li>
          ))}
          <li key="mobile-menu" style={listItemStyles}>
            <Link style={linkStyle} to="/">Home</Link>
          </li>
        </ul>
      </nav>
      {children}
    </React.Fragment>
  )
}

export default Layout