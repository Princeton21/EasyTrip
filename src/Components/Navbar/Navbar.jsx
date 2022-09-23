import React from 'react'
import { Link } from 'react-router-dom';
import "./Navbar.css"
const Navbar = () =>{
    return(
        <>
        <div className="nav-container">
        <div className='logo'></div>
        <ul>
          <li>
            <Link to ="mainroom">Main room</Link>
          </li>
          <li>
            <Link to ="aboutus">About Us</Link>
          </li>
          <li>
            <Link to="signup">Sign Up</Link>
          </li>
        </ul>
      </div>
        </>
    )
}
export default Navbar