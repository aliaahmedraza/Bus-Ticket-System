import React from "react";
import { Link } from "react-router-dom";
import "../Header/Header.css";
const Header = () => {
  return (
    <>
      <header className="header ">
        <nav className="navbar">
          <h1 className="logo">
            <a href="">Travel.Go</a>
          </h1>
          <ul className="nav_links">
            <Link to="/City" className="home">
              <li>Home</li>
            </Link>
            <Link to="/contact" className="contact">
              <li>Contact</li>
            </Link>
          </ul>
          <div>
            <Link to="/login" className="login">
              <button className="login-button">Login</button>
            </Link>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
