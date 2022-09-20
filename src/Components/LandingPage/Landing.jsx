import React from 'react'
import { Link } from 'react-router-dom';
import './Landing.css'
const Navbar = () => {
  return (
    <>
      <div className="nav-container">
        <h2>EASY <span>TRIP</span></h2>
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
      <div className="centre_body">
        <div className="hero-section">      
        <div className="hometitle">Easy Trip</div>
              <div className="homedesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos magnam quae quas saepe earum neque. Culpa, sint asperiores? Dolore, maiores.</div>
        <div className="buttons">
          <button className="plan">Plan a trip</button>
          <button className="join">Join a room</button>
        </div>
        </div>
      </div>
    </>
  );
}

export default Navbar