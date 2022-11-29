import React, {useState} from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const navStyles = {
  backgroundColor: "rgb(0,0,0,0.8)",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
  width:"100%",
  position:"fixed",
  WebkitBackdropFilter:"blur(80px)",
  backdropFilter:"blur(80px)",
  top: 0,
  zIndex: 99
}
const menuModalStyles = {
  width:"100%",
  height:"100vh",
  position:"fixed",
  WebkitBackdropFilter:"blur(10px)",
  backdropFilter:"blur(10px)",
  top: 0
}
const menuStyles = {
  backgroundColor: "rgb(0,0,0)",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-evenly",
  alignItems: "center",
  maxWidth: "980px",
  height:"50vh",
  listStyle: "none",
  padding: "0px 22px",
  margin: "auto"
}
const menuNavStyles = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  maxWidth: "980px",
  height:"48px",
  listStyle: "none",
  padding: "0px 22px",
  margin: "auto",
  background: "rgb(0,0,0)",
}
const menuItemStyles = {
  justifyContent: "center",
  padding: "0px 8px",
  margin: 0,
  listStyle: "none"
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
const buttonStyle = {
  all: 'unset',
  color: "#f5f5f7",
  cursor: 'pointer',
  fontSize: 14,
  textDecoration: "none",
  margin: 0
}

const Navbar = (props) => {
  const menuButtonText = (props.openMenu) ? "Close" : "Menu"
  const navStyle = (props.openMenu) ? menuNavStyles : listStyles
  return (
    <React.Fragment>
      <ul style={navStyle}>
        <li key="home-link-logo" style={listItemStyles}>
          <Link style={linkStyle} to="/"><StaticImage src="../../images/icon.png" alt="logo" width={24} height={24}/></Link>
        </li>
        <li key="mobile-menu" style={listItemStyles}>
          <button style={buttonStyle} onClick={() => props.setOpenMenu(!props.openMenu)}>{menuButtonText}</button>
        </li>
      </ul>
    </React.Fragment>
  )
}

const Menu = (props) => {
  return (
    <React.Fragment>
      <nav style={menuModalStyles}>
      <Navbar openMenu={props.openMenu} setOpenMenu={props.setOpenMenu}/>
        <ul style={menuStyles}>
          {props.links.map(link => (
            <li key={link.text} style={{ ...menuItemStyles, color: link.color}}>
              <Link style={linkStyle} to={link.url}>{link.text}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </React.Fragment>
  )
}

export const NavMobile = (props) => {
  const [openMenu, setOpenMenu] = useState(false)

  return (
    <React.Fragment>
      <nav style={navStyles}>
        <Navbar openMenu={openMenu} setOpenMenu={setOpenMenu}/>
        {openMenu &&
          <Menu links={props.links} openMenu={openMenu} setOpenMenu={setOpenMenu}/>
        }
      </nav>
    </React.Fragment>
  )
}