import * as React from "react"
import { Layout } from "../components/layout"
import { Seo } from "../components/seo"

const pageStyles = {
  padding: 0
}

const formStyles = {
  display: 'flex',
  margin: 'auto',
  maxWidth: '640px',
  width: '100%',
  paddingTop: '100px'
}

const ContactPage = () => {
  return (
    <Layout>
      <main style={pageStyles}>
        <iframe
          style={formStyles}
          title="PAR-Q Form"
          src="https://docs.google.com/forms/d/e/1FAIpQLSf0NQqwGjcvKK2W_1dzqFF1-tW464SG3hfdpUV1nF5kzt5qnQ/viewform?embedded=true"
          width="640" 
          height="1300" 
          frameBorder="0" 
          marginHeight="0" 
          marginWidth="0">
            Loading…
        </iframe>
      </main>
    </Layout>
  )
}

export default ContactPage

export const Head = () => <Seo title="Seven Fitness NI - PAR-Q"/>