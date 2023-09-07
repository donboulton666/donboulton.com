import * as React from 'react'
import { ReactNode } from 'react'
import { StaticQuery, graphql, Link, Script } from 'gatsby'
import CookieConsent from 'react-cookie-consent'
import { SiGnuprivacyguard } from '@react-icons/all-files/si/SiGnuprivacyguard'
import '@/assets/scss/main.scss'

interface LayoutProps {
  children: ReactNode
  location: string
}

const Layout = ({ children, location }: LayoutProps) => {
  let content

  if (location && location.pathname === '/') {
    content = <div>{children}</div>
  } else {
    content = (
      <div id="wrapper" className="page">
        <div>{children}</div>
      </div>
    )
  }

  return (
    <>
      <Script>
        <meta name="og:type" content="webpage" />
        <meta name="description" content="Donald Boulton Personal Web Site" />
        <meta name="og:type" content="webpage" />
        <meta name="keywords" content="donaldboulton" />
        <meta name="robots" content="index" />
        <link href="https://github.com/donaldboulton" rel="me" />
        <link href="https://twitter.com/donboulton" rel="me" />
        <link href="https://facebook.com/don.boulton" rel="me" />
        <link href="https://www.instagram.com/boulton3662" rel="me" />
        <link href="https://www.linkedin.com/donboulton" rel="me" />
        <link href="mailto:donaldboulton@gmail.com" rel="me" />
        <link rel="sitemap" type="application/xml" title="Sitemap" href="/sitemap.xml" />
        <html lang="en" />
      </Script>
      {content}
      <CookieConsent
        enableDeclineButton
        flipButtons
        location="bottom"
        buttonText="Accept"
        declineButtonText="Decline"
        cookieName="gatsby-gdpr-google-analytics"
        style={{
          background: 'linear-gradient(to right, transparent, #171717)',
          textShadow: '2px 2px black',
        }}
        buttonStyle={{
          background: 'radial-gradient(circle at top right, #222, transparent)',
          color: 'white',
          fontWeight: 'bolder',
          borderRadius: '3px',
          border: '1px black',
          textShadow: '2px 2px black',
        }}
      >
        Don Boulton uses cookies for a better user experience.{' '}
        <span
          style={{
            fontSize: '14px',
            textAlign: 'center',
            marginLeft: '20px',
          }}
        >
          <span className="icon -lock">
            <SiGnuprivacyguard />
          </span>{' '}
          <Link to="https://publiuslogic.com/privacy" alt="Privacy Page">
            Privacy Page
          </Link>
        </span>
      </CookieConsent>
    </>
  )
}

export default Layout
