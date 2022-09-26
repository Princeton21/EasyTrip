import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  return (
    <>
      <div className="nav-container">
        <Link to="/">
          <div className="logo"></div>
        </Link>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/mainroom">Main room</Link>
          </li>
          <li>
            <Link to="/aboutus">About Us</Link>
          </li>
          <li>
            <Link to="/signup">SignUp/Login</Link>
          </li>
        </ul>
      </div>
    </>
  );
};
export default Navbar;
