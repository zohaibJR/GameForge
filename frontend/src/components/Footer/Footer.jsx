import React from 'react'
import './Footer.css'
import FooterLogo from '../Assets/Logo_big.png'
import Instagram_Icon from "../Assets/instagram_icon.png"
import Pinterest_icon from '../Assets/pintester_icon.png'
import Whatsapp_icon from "../Assets/whatsapp_icon.png"

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-logo'>
        <img src={FooterLogo} alt="" />
        <p>GameForge</p>
      </div>
      <ul className='footer-links'>
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className='footer-social-icon'>
        <div className='footer-icon-container'>
          <img src={Instagram_Icon} alt="" />
        </div>

        <div className='footer-icon-container'>
          <img src={Pinterest_icon} alt="" />
        </div>

        <div className='footer-icon-container'>
          <img src={Whatsapp_icon} alt="" />
        </div>
      </div>

      <div className='footer-copyright'>
        <hr />
        <p>CopyRight @ 2025 - All Rights Reserved</p>

      </div>

    </div>
  )
}

export default Footer