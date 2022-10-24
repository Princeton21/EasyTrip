import React, { useState } from "react";
import { FaBars, FaTh } from "react-icons/fa";
import { ImSpoonKnife } from "react-icons/im";
import { BsHouseDoorFill } from "react-icons/bs";
import { MdTravelExplore } from "react-icons/md";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";
const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const menuItem = [
    {
      path: "/mroom/dashboard",
      name: "Dashboard",
      icon: <FaTh />,
    },
    {
      path: "/mroom/travel",
      name: "Travel",
      icon: <MdTravelExplore />,
    },
    {
      path: "/mroom/eat",
      name: "Eat",
      icon: <ImSpoonKnife />,
    },
    {
      path: "/mroom/stay",
      name: "Stay",
      icon: <BsHouseDoorFill />,
    },
  ];
  return (
    <>
      <div className="container">
        <div style={{ width: isOpen ? "200px" : "50px" }} className="sidebar">
          <div className="top_section">
            <div className="bars">
              <FaBars onClick={toggle} />
            </div>
          </div>

          {menuItem.map((item, index) => (
            <NavLink
              to={item.path}
              keys={index}
              className="link"
              activeClassName="active"
            >
              <div className="menu_options">
                <div className="icon">{item.icon}</div>
                <div
                  style={{ display: !isOpen ? "none" : "block" }}
                  className="link_text"
                >
                  {item.name}
                </div>
              </div>
            </NavLink>
          ))}
          <main>{children}</main>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
