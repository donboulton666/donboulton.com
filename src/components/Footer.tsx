import * as React from 'react'
import PropTypes from 'prop-types'
import { RiHeart2Line } from '@react-icons/all-files/ri/RiHeart2Line'
import { SiGnuprivacyguard } from '@react-icons/all-files/si/SiGnuprivacyguard'

const Footer = props => (
  <footer id="footer" style={props.timeout ? { display: 'none' } : {}}>
    <p className="copyright">
      &copy; Donald Boulton{' '}
      <span>
        <RiHeart2Line
          style={{
            lineHeight: 'inherit',
            fontSize: '0.8rem',
            color: 'red',
          }}
        />
      </span>{' '}
      Personal Site{' '}
      <span>
        <SiGnuprivacyguard
          style={{
            lineHeight: 'inherit',
            fontSize: '0.8rem',
            color: 'gray',
          }}
        />
      </span>{' '}
      <a href="/privacy">Privacy</a> Built with: <a href="https://www.gatsbyjs.org/">Gatsby.js v5.14.0</a>
    </p>
  </footer>
)

Footer.propTypes = {
  timeout: PropTypes.bool,
}

export default Footer
