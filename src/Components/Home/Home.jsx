import React from 'react'
import { Link } from 'react-router-dom';
import HomeHero from './HomeHero';
import Features from './Features';
import './Home.css'
const Home = () => {
  return (
    <>
      <div className="centre_body">
        <div className="hero-section"> 
        <div id="info-section">     
        <div className="hometitle">Easy Trip</div>
              <div className="homedesc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              </div>
        <div className="buttons">
          <Link to="/Plan_a_trip">
          <button className='button'>Plan a trip</button>
          </Link>
          <button className='button' id='join'>Join a room</button>
       
        </div>
        </div>
        <HomeHero/>
        </div>
      </div>
      <div className='steps'>
            <div className="step1">
                <div className='s-header'>
                 Step 1:
                </div>
                <div className='step-info'>
                lorem blah blah blah 
                </div>
            </div>
            <div className="step2">
                <div className='s-header'>
                  Step 2:
                </div>
                <div className='step-info'>
                lorem blah blah blah 
                </div>
            </div>
            <div className="step3">
                <div className='s-header'>
                  Step 3:
                </div>
                <div className='step-info'>
                lorem blah blah blah 
                </div>
            </div>
            <div className='navigate'>
                  <div className='c1'></div>
                  <div className='c2'></div>
            </div>
      </div>
      <div className='features'>
          <div className='features-header'>We help to plan your trip<br>
          </br>
          with.
          <span id="ease">Ease</span>
          </div>
      </div>
      <Features/>
      <footer>
        
      </footer>
    </>
  );
}

export default Home