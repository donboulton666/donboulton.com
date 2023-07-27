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
    {
      resolve: `gatsby-plugin-gdpr-cookies`,
      options: {
        googleAnalytics: {
          trackingId: 'UA-30162465-2',
          cookieName: 'gatsby-gdpr-google-analytics',
          anonymize: true,
          allowAdFeatures: false,
        },
        googleTagManager: {
          trackingId: 'G-6YWM2JY5EH',
          cookieName: 'ga4',
          dataLayerName: 'dataLayer',
        },
        facebookPixel: {
          pixelId: 'YOUR_FACEBOOK_PIXEL_ID',
          cookieName: 'gatsby-gdpr-facebook-pixel',
        },
        tikTokPixel: {
          pixelId: 'YOUR_TIKTOK_PIXEL_ID',
          cookieName: 'gatsby-gdpr-tiktok-pixel',
        },
        hotjar: {
          hjid: '2721607',
          hjsv: '6',
          cookieName: 'gatsby-gdpr-hotjar', 
        },
        environments: ['production', 'development'],
      },
    },
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-plugin-offline',
      options: {
        precachePages: ['/', '/about', '/contact', '/blog/*'],
        workboxConfig: {
          importWorkboxFrom: 'cdn',
        },
      },
    },
    {
      resolve: 'gatsby-plugin-netlify',
      options: {
        allPageHeaders: [],
        mergeSecurityHeaders: true,
        mergeCachingHeaders: true,
        transformHeaders: headers => headers,
        generateMatchPathRewrites: true,
      },
    },
  ],
}

export default config
