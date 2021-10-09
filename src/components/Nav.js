import React from "react";
import "../styles/Nav.css";
import Logo from "../images/exxen-logo.png";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";


const Nav = () => {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <img src={Logo} alt="" />
        <span>Movies</span>
      </div>
      <div className="navbar__icons">
        <PersonOutlineOutlinedIcon className="icon" />
        <HomeOutlinedIcon className="icon" />
        <SearchOutlinedIcon className="icon" />
      </div>
    </nav>
  );
};

export default Nav;
