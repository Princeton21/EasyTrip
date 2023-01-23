import React from 'react'
import { Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import SignUp from "./components/SignUp/SignUp";
import AboutUs from "./pages/AboutUs/AboutUs";
import MainRoom from './pages/MainRoom/MainRoom';
import Home from './pages/Home/Home';
import PlanTrip from './pages/Home/Plan_a_trip/PlanTrip';
import Dashboard from './pages/MainRoom/Pages/Dashboard/Dashboard';
import Travel from './pages/MainRoom/Pages/Travel/Travel';
import Eat from './pages/MainRoom/components/Map/Eat/Eat';
import Stay from './pages/MainRoom/Pages/Stay/Stay';
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/mroom" element={<MainRoom />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="travel" element={<Travel />} />
          <Route path="eat" element={<Eat />} />
          <Route path="stay" element={<Stay />} />
        </Route>  
        <Route exact path="/signup" element={<SignUp />} />
        <Route exact path="/aboutus" element={<AboutUs />} />
        <Route exact path="/planatrip" element={<PlanTrip />} />
      </Routes>
    </>
  );
}

export default App;
