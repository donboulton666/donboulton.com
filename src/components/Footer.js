import React from 'react'
import PropTypes from 'prop-types'

const Footer = (props) => (
    <footer id="footer" style={props.timeout ? {display: 'none'} : {}}>
        <p className="copyright">&copy; Donald Boulton Personal Site. Design: <a href="/privacy">Basic Instructions</a>. Built with: <a href="https://www.gatsbyjs.org/">Gatsby.js v4.2.0</a></p>
    </footer>
)

Footer.propTypes = {
    timeout: PropTypes.bool
}

export default Footer
