import React from 'react'
import Navbar from './Components/Navbar/Navbar';
import SignUp from "./Components/SignUp/SignUp";
import AboutUs from "./Components/AboutUs/AboutUs";
import { Route, Routes } from "react-router-dom";
import MainRoom from './Components/MainRoom/MainRoom';
import Home from './Components/Home/Home';
function App() {
  return (
    <>
    <Home/>
      {/* <Navbar /> 
      <Route exact path="MainRoom" element={<MainRoom/>}/>
      <Route exact path="SignUp" element={<SignUp/>}/>
      <Route exact path="AboutUs" element={<AboutUs/>}/> */}
    </>
  );
}

export default App;
