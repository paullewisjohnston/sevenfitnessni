import React from "react";
import { Nav } from './nav'
import { Footer } from './footer'
import { useBreakpoint } from 'gatsby-plugin-breakpoints';

export const Layout = ({children}) => {
  const breakpoints = useBreakpoint();
  const isMobile = breakpoints.sm;
  return (
    <React.Fragment>
      <Nav isMobile={isMobile}/>
      {children}
      <Footer isMobile={isMobile}/>
    </React.Fragment>
  )
}