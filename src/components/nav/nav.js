import React from "react";
import { NavDesktop } from './navDesktop'
import { NavMobile } from './navMobile'

const links = [
  {
    text: "Home",
    url: "/",
  },
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
    text: "Contact",
    url: "/contact",
  }
]

export const Nav = (props) => {
  const isMobile = props.isMobile;

  return (
    <React.Fragment>
      {isMobile
        ? <NavMobile links={links}/>
        : <NavDesktop links={links}/>
      }
    </React.Fragment>
  )
}