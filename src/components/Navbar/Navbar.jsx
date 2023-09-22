import React from "react";
import './Navbar.css'

function Navbar(){

    const [checked, setChecked] = React.useState(false);

    const handleChange = () => {
      setChecked(!checked);
    };
  

    return(
    <nav class="navbar">
        <div class="navbar-container container">
            <input
                type="checkbox"
                checked={checked}
                onChange={handleChange}
            />
            <div class="hamburger-lines">
                <span class="line line1"></span>
                <span class="line line2"></span>
                <span class="line line3"></span>
            </div>
            <ul class="menu-items">
                <li><a href="/home">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/flavours">Flavours</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
            <div class="logo"> <img src="logo.jpg" alt="Elisa Gelato logo" height={70}/> </div>
        </div>
    </nav>
    )
}

export default Navbar;