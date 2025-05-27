// components/Navbar.js
import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";  // optional if you want to style separately
import logo from '../assets/vmc.png';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo" style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <Link to="/" style={{ display: "flex", alignItems: "center", textDecoration: "none", color: "inherit" }}>
            <img src={logo} alt="VMC Logo" style={{ height: "45px", width: "43px",  borderRadius:"50%",  objectFit:"cover" }} />
            <i style={{ marginLeft: "8px" , color:"blue", fontSize:"29px"}}>VMC</i>
          </Link>
        </div>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/about">About</Link>
        </div>
      </div>
    </nav>
  );
};


export default Navbar;
