module.exports = {
  pathPrefix: "/sevenfitnessni",
  siteMetadata: {
    title: "Seven Fitness NI",
    siteUrl: "https://paullewisjohnston.github.io/sevenfitnessni",
    description: "Seven Fitness NI - Our aim is to help people meet their fitness goals and to build a small community feel through group exercise.",
    twitterUsername: `@sevenfitnessni`,
    image: ``,
  },
  plugins: ["gatsby-plugin-styled-components",{
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
  },
  'gatsby-plugin-breakpoints']
};