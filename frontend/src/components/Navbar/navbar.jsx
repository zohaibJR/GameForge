import React from 'react'
import '../Navbar/navbar.css'

import Logo from "../Assets/Logo2.png"
import cart_icon from "../Assets/cart_icon.png"

const navbar = () => {
  return (
    <div className="navbar">
        <div className="nav-logo">
            <img src={Logo} alt='' />
            <p>GameForge</p>
        </div>
        <ul className="nav-menu">
            <li>Shop <hr/> </li>
            <li>PC</li>
            <li>PS4</li>
            <li>Accessories</li>
        </ul>

        <div className="nav-login-cart">
            <button>Login</button>
            <img src={cart_icon} alt="" />
        </div>


    </div>
  )
}

export default navbar