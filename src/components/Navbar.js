import React from 'react'
import Logo from '../images/uhc_logo.png';
import SearchIcon from '../images/search.png';
import './Navbar.css'

function Navbar() {
  return (
    <div class="nav-container">
      <div class="wrapper">
        <nav>
            <div id="logo"><img src={Logo} alt="UHC Logo" /></div>
            <ul class="nav-items">
                <li> <a href="#">Resources</a></li>
                <li> <a href="#">Health & Wellness</a></li>
                <li> <a href="#">Pharmacy</a></li>
                <li> <a href="#">About Us</a></li>
                <li> <input id="search-box" type="text" placeholder="Type searching" /></li>
                <li> <a href="#"><img src={SearchIcon} alt="Search Icon" /></a></li>
            </ul>
        </nav>
      </div>
    </div>  
  )
}

export default Navbar