import React from "react";
import { Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar"
import styles from "./MainRoom.module.css";
import Dashboard from "../../pages/MainRoom/page/Dashboard/Dashboard";
import Travel from "../../pages/MainRoom/page/Travel/Travel"
import Eat from "../../pages/MainRoom/page/Eat/Eat";
import Stay from "../../pages/MainRoom/page/Stay/Stay";

const MainRoom = () => {
  return (
    <>
      <Sidebar>
        <Routes>
          <Route path="/mroom/dashboard" element={<Dashboard />} />
          <Route path="/travel" element={<Travel />} />
          <Route path="/eat" element={<Eat />} />
          <Route path="/stay" element={<Stay />} />
        </Routes>
      </Sidebar>

      {/* <Map /> */}

      {/* <Outlet /> */}
    </>
  );
};
 
export default MainRoom;
