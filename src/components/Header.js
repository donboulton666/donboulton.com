import React from 'react'
import PropTypes from 'prop-types'
import Bio from "./bio"

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="logo">
        <Bio />
        </div>
        <div className="content">
            <div className="inner">
                <h1>Donald Boulton</h1>
                <p>Landing Site For the Books Of Life <a href="https://publiuslogic.com">PubliusLogic</a> and released<br />
                for free under the <a href="https://donboulton.com/license">BSD</a> license.</p>
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('intro')}}>Bibwoe.com </a></li>
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
