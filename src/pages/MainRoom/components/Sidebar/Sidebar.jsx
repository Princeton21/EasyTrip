import React, { useState } from "react";
import { FaBars, FaTh } from "react-icons/fa";
import { ImSpoonKnife } from "react-icons/im";
import { BsHouseDoorFill} from "react-icons/bs";
import { MdLogout, MdTravelExplore } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";
import "./Sidebar.css";
const Sidebar = () => {
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
      <div className={`container `}>
        <div
          // style={{ width: isOpen ? "200px" : "50px" }}
          className={`sidebar `}>
          <div className="bars ">
            <FaBars onClick={toggle} />
          </div>
          {menuItem.map((item, index) => (
            <NavLink
              to={item.path}
              keys={index}
              className="link"
              // activeClassName="active"
            >
              <div className={`menu_option `}>
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
          {/* <Link to="/logout">
            <div className="icon logout"><MdLogout/></div>
          </Link> */}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
