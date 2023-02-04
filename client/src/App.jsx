import React from 'react'
import { Route, Routes } from "react-router-dom";
import Navbar from './component/Navbar/Navbar';
import SignUp from "./component/SignUp/SignUp";
import AboutUs from "./pages/AboutUs/AboutUs";
import MainRoom from './pages/MainRoom/MainRoom';
import Home from './pages/Home/Home';
import PlanTrip from './pages/Home/Plan_a_trip/PlanTrip';
import Mroom from "./pages/MainRoom/Mroom"
// import Dashboard from './pages/MainRoom/page/Dashboard/Dashboard';
// import Travel from './pages/MainRoom/page/Travel/Travel';
// import Eat from './pages/MainRoom/page/Eat/Eat';
// import Stay from './pages/MainRoom/page/Stay/Stay';
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/mroom/*" element={<Mroom/>}/>
        <Route exact path="/signup" element={<SignUp />} />
        <Route exact path="/aboutus" element={<AboutUs />} />
        <Route exact path="/planatrip" element={<PlanTrip />} />
      </Routes>
    </>
  );
}

export default App;
