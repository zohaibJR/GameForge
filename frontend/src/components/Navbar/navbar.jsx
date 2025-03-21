import React, { useState } from 'react';
import '../Navbar/navbar.css';
import Logo from "../Assets/Logo2.png";
import cart_icon from "../Assets/cart_icon.png";
import { Link } from 'react-router-dom';

const Navbar = () => { // ✅ Fixed component name (Capitalized)

  const [menu, setMenu] = useState("Shop");

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={Logo} alt="GameForge Logo" /> {/* ✅ Added alt text */}
        <p>GameForge</p>
      </div>

      <ul className="nav-menu">
        <li onClick={() => setMenu("Shop")}><Link style={{textDecoration:'none'}} to='/'>Shop</Link>{menu === "Shop" ? <hr /> : null} </li>
        <li onClick={() => setMenu("PS4")}><Link style={{textDecoration:'none'}} to='/PS4'>PS4</Link>{menu === "PS4" ? <hr /> : null} </li>
        <li onClick={() => setMenu("Xbox")}><Link style={{textDecoration:'none'}} to='/Xbox'>Xbox</Link>{menu === "Xbox" ? <hr /> : null} </li>
        <li onClick={() => setMenu("Accessories")}><Link style={{textDecoration:'none'}} to='/Accessories'>Accessories</Link>{menu === "Accessories" ? <hr /> : null} </li>
      </ul>

      <div className="nav-login-cart">
        <Link to='/login'><button>Login</button></Link>
        <Link to='/cart'>
        <img src={cart_icon} alt="Cart Icon" />
        </Link>
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  );
};

export default Navbar; // ✅ Fixed export (capitalized)
