import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

const gridContent = {
  // By using the same grid area for both, they are stacked on top of each other
  gridArea: "1/1",
  position: "relative",
  // This centers the other elements inside the hero component
  placeItems: "center",
  display: "grid",
  color: "#ffffff"
}

export function Hero(props) {
  return (
    <div style={{ display: "grid" }}>
      {/* You can use a GatsbyImage component if the image is dynamic */}
      <StaticImage
        style={{
          gridArea: "1/1",
          // You can set a maximum height for the image, if you wish.
          height: '900px',
        }}
        layout="fullWidth"
        aspectRatio={2 / 1}
        alt=""
        src={"../../images/teslahero_mobile.jpg"}
        formats={["auto"]}
      />
      <div style={gridContent}>
        <h1>{props.block.text}</h1>
      </div>
    </div>
  )
}