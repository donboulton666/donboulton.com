import React from 'react'
import PropTypes from 'prop-types'
import { Link } from "gatsby"
import { RiFacebookBoxFill } from "@react-icons/all-files/ri/RiFacebookBoxFill"
import { RiTwitterFill, } from "@react-icons/all-files/ri/RiTwitterFill"
import { RiInstagramFill } from "@react-icons/all-files/ri/RiInstagramFill"
import { RiGithubFill } from "@react-icons/all-files/ri/RiGithubFill"
import pic01 from '../../static/assets/pic01.jpg'
import pic02 from '../../static/assets/pic02.jpg'
import pic03 from '../../static/assets/pic03.jpg'

class Main extends React.Component {
  render() {

    let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>

    return (
      <div ref={this.props.setWrapperRef} id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>

        <article id="intro" className={`${this.props.article === 'intro' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <Link to="https://bibwoe.com" rel="noopener noreferrer" target="_blank" area-label="Bibwoe"><h2 className="major">Bibwoe.com</h2></Link>
          <span className="image main"><Link to="https://bibwoe.com" rel="noopener noreferrer" target="_blank" area-label="Bibwoe"><img src={pic01} alt="Creation of All" /></Link></span>
          <p>Basic Instructions Books While On Earth, Creation Of All <Link to="#work" rel="noopener noreferrer" target="_blank" area-label="Bibwoe">awesome work</Link>.</p>
          <p>Lorem ipsum dolor sit amet, </p>
          {close}
        </article>

        <article id="work" className={`${this.props.article === 'work' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Mansbooks.com</h2>
          <span className="image main"><img src={pic02} alt="Mansbooks" /></span>
          <p>Adipiscing magna sed dolor elit. Praesent eleifend dignissim arcu, at eleifend sapien imperdiet ac. Aliquam erat volutpat. Praesent urna nisi, fringila lorem et vehicula lacinia quam. Integer sollicitudin mauris nec lorem luctus ultrices.</p>
          <p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus pharetra. Pellentesque condimentum sem. In efficitur ligula tate urna. Maecenas laoreet massa vel lacinia pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus amet feugiat tempus.</p>
          {close}
        </article>

        <article id="about" className={`${this.props.article === 'about' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Publiuslogic</h2>
          <span className="image main"><img src={pic03} alt="PubliusLogic" /></span>
          <p>Lorem ipsum dolor sit amet, consectetur et adipiscing elit. Praesent eleifend dignissim arcu, at eleifend sapien imperdiet ac. Aliquam erat volutpat. Praesent urna nisi, fringila lorem et vehicula lacinia quam. Integer sollicitudin mauris nec lorem luctus ultrices. Aliquam libero et malesuada fames ac ante ipsum primis in faucibus. Cras viverra ligula sit amet ex mollis mattis lorem ipsum dolor sit amet.</p>
          {close}
        </article>

        <article id="contact" className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Contact Form</h2>
          <form
            className="contact-form"
            action="/thanks"
            name="contact"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
          >
            <input type="hidden" name="form-name" value="contact" />
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li><input type="submit" value="Send Message" className="special" /></li>
              <li><input type="reset" value="Reset" /></li>
            </ul>
          </form>
          <ul className="icons">
            <li>
              <Link to="https://twitter.com/donboulton" className="icon fa-twitter" rel="noopener noreferrer" target="_blank" area-label="Bibwoe">
                <RiTwitterFill alt='Twitter'
                  style={{
                    fontSize: "2rem",
                    color: "gray",
                  }}
                />
                <span className="label">Twitter</span>
              </Link>
            </li>
            <li>
              <Link to="https://facebook.com/donboulton" className="icon fa-facebook" rel="noopener noreferrer" target="_blank" area-label="Bibwoe">
                <RiFacebookBoxFill alt='Facebook'
                  style={{
                    fontSize: "2em",
                    color: "gray",
                  }}
                />
                <span className="label">Facebook</span>
              </Link>
            </li>
            <li>
              <Link to="https://www.instagram.com/boulton3662/" className="icon fa-instagram" rel="noopener noreferrer" target="_blank" area-label="Bibwoe">
                <RiInstagramFill alt='Instagram'
                  style={{
                    fontSize: "2em",
                    color: "gray",
                  }}
                />
                <span className="label">Instagram</span>
              </Link>
            </li>
            <li>
              <Link to="https://gihub.com/donaldboulton/donboulton.com" className="icon fa-github" rel="noopener noreferrer" target="_blank" area-label="Bibwoe">
                <RiGithubFill alt='Github'
                  style={{
                    fontSize: "2em",
                    color: "gray",
                  }}
                />
                <span className="label">GitHub</span>
              </Link>
            </li>
          </ul>
          {close}
        </article>

      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main