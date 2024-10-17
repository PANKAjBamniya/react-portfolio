import React from 'react'
import './Footer.css'
import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='footer'>
        <footer>
  <div className="footer-container">
    <div className="footer-left">
      <h3>About Me</h3>
      <p>I'm a passionate web developer, always excited to build new things and learn more!</p>
    </div>
    
    <div className="footer-middle">
      <h3>Quick Links</h3>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </div>
    
    <div className="footer-right">
      <h3>Follow Me</h3>
      <div className="social-icons">
        <a href="#"><FaSquareFacebook className='icons'/></a>
        <a href="#"><FaLinkedin className='icons' /></a>
        <a href="#"><FaInstagramSquare className='icons'/></a>
      </div>
    </div>
  </div>
  <div className="footer-bottom">
    <p>&copy; 2024 Pankaj bamniya. All rights reserved.</p>
  </div>
</footer>

    </div>
  )
}

export default Footer