import * as React from 'react'
import PropTypes from 'prop-types'
import Bio from '@/components/bio'

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo">
      <Bio className="icon" />
    </div>
    <div className="content">
      <div className="inner">
        <h1>Donald Boulton</h1>
        <p>
          The Books Of Life{' '}
          <a href="https://bibwoe.com" rel="noopener noreferrer" target="_blank" area-label="Bibwoe">
            Bibwoe.com
          </a>
          &nbsp;Part Of&nbsp;
          <a href="https://mansbooks.com" rel="noopener noreferrer" target="_blank" area-label="Mansbooks">
            Mansbooks.com
          </a>
          <br />
          An A Logic And Government Site&nbsp;
          <a href="https://publiuslogic.com" rel="noopener noreferrer" target="_blank" area-label="PubliusLogic">
            PubliusLogic.com
          </a>
        </p>
      </div>
    </div>
    <nav>
      <ul>
        <li>
          <a
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle('intro')
            }}
          >
            Bibwoe Books
          </a>
        </li>
        <li>
          <a
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle('work')
            }}
          >
            Mansbooks
          </a>
        </li>
        <li>
          <a
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle('about')
            }}
          >
            PubliusLogic
          </a>
        </li>
        <li>
          <a
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle('contact')
            }}
          >
            Contact Us
          </a>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
