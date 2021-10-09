import React from 'react'
import Wallpaper from "../images/interstellar.jpg" 
import "../styles/Header.css"
import Nav from "../components/Nav.js"

const Header = () => {
    return (
      <div className="header">
        <Nav/>
        <img src={Wallpaper} alt="" />
        <div className="image__mask" />
      </div>
    );
}

export default Header
