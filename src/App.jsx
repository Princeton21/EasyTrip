import React from 'react'
import Navbar from "./Components/LandingPage/Landing";
import MainRoom from "./Components/MainRoom/MainRoom";
import SignUp from "./Components/Authentication/SignUp/SignUp";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/mainroom" element={<MainRoom />} />
        <Route exact path="/signup" element={<SignUp />} />
      </Routes>
    </>
  );
}

export default App;
