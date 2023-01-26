import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar"
// import styles from "./MainRoom.module.css";



const MainRoom = () => {
  return (
    <>
        <Sidebar/>
        {/* <Map /> */}

      <Outlet/>
    </>
  );
};

export default MainRoom;
