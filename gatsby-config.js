require('dotenv').config({
  path: '.env'
})

module.exports = {
  siteMetadata: {
    title: `WMK Gatsby Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@WatermarkAgency`,
  },
  plugins: [
    `gatsby-plugin-netlify`,
    /* CONTENTFUL DELIVERY */
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    // Uncomment if using Contentful Preview API
    /* CONTENTFUL PREVIEW API */
    // {
    //   resolve: `gatsby-source-contentful`,
    //   options: {
    //     spaceId: process.env.CONTENTFUL_SPACE_ID,
    //     accessToken: process.env.CONTENTFUL_PREVIEW_TOKEN,
    //     host: `preview.contentful.com`,
    //   },
    // },
   `gatsby-plugin-styled-components`,
   // Uncomment & configure .env file to use Google Tag Manager
   /*
   {
    resolve: "gatsby-plugin-google-tagmanager",
    options: {
      id: process.env.GOOGLE_TAGMANAGER_ID,
      includeInDevelopment: false,
      defaultDataLayer: { platform: "gatsby" }
    }
  },
  */

// Uncomment & configure to use Google Fonts
/*
  {
    resolve: `gatsby-plugin-google-fonts`,
    options: {
      fonts: [`poppins\:300,400,400i,500,600,700i`, `ibm plex sans\:400,500,600,700`],
      display: "swap"
    }
  },
  */
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      // options: {
      //   // Add any options here
      // },
    },
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
