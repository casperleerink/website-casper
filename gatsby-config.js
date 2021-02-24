module.exports = {
  siteMetadata: {
    title: `Casper Leerink`,
    description: `The personal website of composer, developer and artist Casper Leerink.`,
    author: `Casper Leerink`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Casper Leerink`,
        short_name: `Casper`,
        start_url: `/`,
        background_color: `#f6ffe6`,
        theme_color: `#0278ae`,
        display: `minimal-ui`,
        icon: `src/data/logo/Logo_1x.png`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-offline`,
  ],
}
