import * as React from "react"
import { Layout } from "../components/layout"
import { BlockHero } from "../components/blockHero"
import { BlockOne } from "../components/blockOne"
import { BlockTwo } from "../components/blockTwo"
import { Seo } from "../components/seo"
import imageDesktop from "../images/teslahero.jpg"
import imageMobile from "../images/teslahero_mobile.jpg"

const pageStyles = {
  padding: 0,
}

const hero = {
  text: "Seven Fitness NI",
  url: "/",
  imageDesktop: imageDesktop,
  imageMobile: imageMobile,
  description:
    "Our aim is to help people.",
  color: "#fbfbfb",
  primaryLink: {text:"Link 1", url:"/"},
  secondaryLink: {text:"Link 2", url:"/"},
}

const blocks = [
  {
    type: "blockone",
    text: "About",
    url: "/about",
    description:
      "A great place to get started if you're new to web development. Designed to guide you through setting up your first Gatsby site.",
    color: "#fbfbfb",
  },
  {
    type: "blocktwo",
    text: "Schedule",
    url: "/schedule",
    description:
      "Practical step-by-step guides to help you achieve a specific goal. Most useful when you're trying to get something done.",
    color: "#fbfbfd",
  },
  {
    type: "blockone",
    text: "FAQ",
    url: "/faq",
    description:
      "A great place to get started if you're new to web development. Designed to guide you through setting up your first Gatsby site.",
    color: "#010127",
  },
  {
    type: "blocktwo",
    text: "Contact",
    url: "/contact",
    description:
      "Practical step-by-step guides to help you achieve a specific goal. Most useful when you're trying to get something done.",
    color: "#fbfbfb",
  }
]

const IndexPage = () => {
  return (
    <Layout>
      <main style={pageStyles}>
        <BlockHero block={hero}/>
        {blocks.map(block => ( 
          block.type === 'blockone' 
          ? <BlockOne key={block.url} block={block} background={block.color}/>
          : <BlockTwo key={block.url} block={block} background={block.color}/>
        ))}
      </main>
    </Layout>
  )
}

export default IndexPage

export const Head = () => <Seo title="Seven Fitness NI - Home"/>