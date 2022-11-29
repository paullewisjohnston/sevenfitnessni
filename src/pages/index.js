import * as React from "react"
import { Layout } from "../components/layout"
import { Hero } from "../components/block/Hero"
import { BlockOne } from "../components/block/BlockOne"
import { BlockTwo } from "../components/block/BlockTwo"
import { Seo } from "../components/seo"

const pageStyles = {
  color: "#232129",
  padding: 0,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

const hero = {
  text: "SevenFitnessNI",
  url: "/",
  description:
    "Our aim is to help people meet their fitness goals and to build a small community feel through group exercise.",
  color: "#fbfbfb",
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
        <Hero block={hero}/>
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