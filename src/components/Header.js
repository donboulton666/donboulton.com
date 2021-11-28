import React from 'react'
import { Link } from "gatsby"
import PropTypes from 'prop-types'
import Bio from "./bio"

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="logo">
          <Bio className="icon" />
        </div>
        <div className="content">
            <div className="inner">
                <h1>Donald Boulton</h1>
                <p>The Books Of Life <Link to="https://bibwoe.com" rel="noopener noreferrer" target="_blank" area-label="Bibwoe">Bibwoe.com</Link>&nbsp;Part Of&nbsp;<Link to="https://mansbooks.com" rel="noopener noreferrer" target="_blank" area-label="Mansbooks">Mansbooks.com</Link><br />
                  An A Logic And Government Site&nbsp;<Link to="https://publiuslogic.com" rel="noopener noreferrer" target="_blank" area-label="PubliusLogic">PubliusLogic.com</Link>
                </p>
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('intro')}}>Bibwoe Books</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('work')}}>Mansbooks</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('about')}}>PubliusLogic</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('contact')}}>Contact Us</a></li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
