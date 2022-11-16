import * as React from "react"
import { Layout } from "../components/layout"
import { BlockOne } from "../components/block/BlockOne"
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
  color: "#E95800",
}

const blocks = [
  {
    text: "About",
    url: "/about",
    description:
      "A great place to get started if you're new to web development. Designed to guide you through setting up your first Gatsby site.",
    color: "#E95800",
  },
  {
    text: "Schedule",
    url: "/schedule",
    description:
      "Practical step-by-step guides to help you achieve a specific goal. Most useful when you're trying to get something done.",
    color: "#1099A8",
  },
  {
    text: "FAQ",
    url: "/faq",
    description:
      "A great place to get started if you're new to web development. Designed to guide you through setting up your first Gatsby site.",
    color: "#E95800",
  },
  {
    text: "Contact",
    url: "/contact",
    description:
      "Practical step-by-step guides to help you achieve a specific goal. Most useful when you're trying to get something done.",
    color: "#1099A8",
  }
]

const AboutPage = () => {
  return (
    <Layout>
      <main style={pageStyles}>
        <BlockOne block={hero}/>
          {blocks.map(block => (
            <BlockOne key={block.url} block={block}/>
          ))}
      </main>
    </Layout>
  )
}

export default AboutPage

export const Head = () => <Seo title="Seven Fitness NI - About"/>