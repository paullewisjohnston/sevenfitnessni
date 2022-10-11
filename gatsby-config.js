module.exports = {
  pathPrefix: "/sevenfitnessni",
  siteMetadata: {
    title: `sevenfitnessni`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: ["gatsby-plugin-styled-components", {
    resolve: 'gatsby-plugin-google-analytics',
    options: {
      "trackingId": "335910477"
    }
  }, "gatsby-plugin-image", "gatsby-plugin-sitemap", {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/icon.png"
    }
  }, "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }]
};