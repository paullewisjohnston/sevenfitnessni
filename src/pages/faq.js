import * as React from "react"
import { Layout } from "../components/layout"
import { BlockOne } from "../components/blockOne"
import { Seo } from "../components/seo"

const pageStyles = {
  padding: 0
}

const hero = {
  text: "FAQ",
  url: "/",
  description:
    "Our aim is to help people meet their fitness goals and to build a small community feel through group exercise.",
  color: "#fbfbfb",
}

const blocks = [
  {
    text: "About",
    url: "/about",
    description:
      "A great place to get started if you're new to web development. Designed to guide you through setting up your first Gatsby site.",
    color: "#fbfbfd",
  },
  {
    text: "Schedule",
    url: "/schedule",
    description:
      "Practical step-by-step guides to help you achieve a specific goal. Most useful when you're trying to get something done.",
    color: "#fbfbfb",
  },
  {
    text: "FAQ",
    url: "/faq",
    description:
      "A great place to get started if you're new to web development. Designed to guide you through setting up your first Gatsby site.",
    color: "#fbfbfd",
  },
  {
    text: "Contact",
    url: "/contact",
    description:
      "Practical step-by-step guides to help you achieve a specific goal. Most useful when you're trying to get something done.",
    color: "#fbfbfb",
  }
]

const FaqPage = () => {
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

export default FaqPage

export const Head = () => <Seo title="Seven Fitness NI - FAQ"/>