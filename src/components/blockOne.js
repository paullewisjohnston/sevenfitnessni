import * as React from "react"
import { Link } from "gatsby"
import { useBreakpoint } from 'gatsby-plugin-breakpoints';

const heroComponent = {
  display:"flex",
  position:"relative",
  height: "720px",
  width: "100%",
  backgroundSize: "cover",
  backgroundPosition: "center",
  flexDirection: "column",
  alignItems: "center",
  justifyItems: "center",
}

const contentItems = {
  display: "flex",
  flexDirection: "column",
  position: "relative",
  alignItems: "center",
  justifyItems: "center",
  textAlign: "center",
  color: "rgba(0, 0, 0, 0.95)",
  width: "100%",
  height: "100%",
  maxWidth: "400px",
  paddingTop: "108px",
  paddingLeft: "20px",
  paddingRight: "20px",
}

const linkContainer = {
  display: "flex",
  alignItems: "center"
}

export function BlockOne(props) {
  const block = props.block
  const breakpoints = useBreakpoint();
  const isMobile = breakpoints.sm;
  const image = isMobile ? props.block.imageMobile : props.block.imageDesktop

  return (
  <div style={{...heroComponent, backgroundImage: `url(${image})`}}>
      <div style={contentItems}>
        {block.text && <h2>{block.text}</h2>}
        {block.description && <h3>{block.description}</h3>}
        <div style={linkContainer}>
          {block.primaryLink && <Link to={block.primaryLink.url}>{block.primaryLink.text}</Link>}
          {block.primaryLink && <Link to={block.secondaryLink.url}>{block.secondaryLink.text}</Link>}
        </div>
      </div>
    </div>
  )
}