import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className='footer__socials'>
        <a href="https://www.facebook.com/borislav.kolev.18400" target="_blank"><FaFacebookF/></a>
        <a href='https://www.linkedin.com/in/borislav-kolev-2b1142194/' target="_blank"><BsLinkedin/></a>
        <a href='https://github.com/BorisKolev' target="_blank"><FaGithub/> </a>
      </div>

      <div className='footer__copyright'>
        <small>&copy; Borislav Kolev. All rights reserved.</small>
      </div> 

    </footer>
  )
}

export default Footer