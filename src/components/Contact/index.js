import {Component} from 'react'
import './index.css'

import {FaLinkedin} from 'react-icons/fa'
import {IoMdMail} from 'react-icons/io'
import {PiCopyrightThin} from 'react-icons/pi'
import {FaSquareGithub} from 'react-icons/fa6'

class Home extends Component {
  render() {
    return (
      <div id="contact" className="contact-container">
        <div className="social-icons-container">
          <a
            href="https://github.com/manjunath70360"
            target="_blank"
            rel="noreferrer"
            aria-label="Go to github page"
          >
            <FaSquareGithub className="icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/manjunath-matapathi"
            target="_blank"
            rel="noreferrer"
            aria-label="Go to linkedin page"
          >
            <FaLinkedin className="icon" />
          </a>
          <a
            href="mailto:manjunath70360@gmail.com"
            target="_blank"
            rel="noreferrer"
            aria-label="Go to mail page"
          >
            <IoMdMail className="icon" />
          </a>
        </div>
        <p className="copy-text">
          Copyright <PiCopyrightThin className="copy-icon" /> 2024. All rights
          reserved
        </p>
      </div>
    )
  }
}

export default Home
