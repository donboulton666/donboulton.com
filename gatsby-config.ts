import type { GatsbyConfig } from 'gatsby'

const config: GatsbyConfig = {
  siteMetadata: {
    title: 'Donald Boulton - Dimension V4',
    author: 'Donald Boulton',
    siteUrl: 'https://donboulton.com',
    siteImage: '/static/assets/bg.jpg',
    description: 'A Gatsby.js v5 Starter based on Dimension by HTML5 UP',
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/static/assets/`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`],
          placeholder: `dominantColor`,
          quality: 80,
          breakpoints: [750, 1080, 1366, 1920],
          backgroundColor: `transparent`,
        },
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'donaldboulton',
        short_name: 'Landing Site',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'static/assets/apple-touch-icon.png',
      },
    },
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-plugin-offline',
      options: {
        precachePages: ['/', '/thanks'],
        workboxConfig: {
          importWorkboxFrom: 'cdn',
        },
      },
    },
  ],
}

export default config
