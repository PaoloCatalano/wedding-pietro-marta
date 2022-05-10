module.exports = {
  siteMetadata: {
    title: `Marta e Pietro`,
    description: `Celebriamo tutti assieme il tanto atteso evento: Il matrimonio tra Marta e Pietro!`,
    author: `@PaoloCatalano`,
    siteUrl: `https://pietroemarta.netlify.app/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `matrimonio-pietro-e-marta`,
        short_name: `pietro+marta`,
        start_url: `/`,
        background_color: `#f8edebff`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        theme_color: `#fec5bbff`,
        display: `standalone`,
        icon: `src/images/marta-w.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
