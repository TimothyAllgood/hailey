import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import SubMenu from "./SubMenu/SubMenu";
import "./Menu.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";

function Menu({ menu }) {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleDropdown = () => {
    setShowDropdown(!showDropdown);
  };
  return (
    <li
      className="menu"
      onMouseEnter={() => handleDropdown()}
      onMouseLeave={() => handleDropdown()}
    >
      <div className="menu-title">
        <NavLink to={menu.url}>
          {menu.title}{" "}
          <FontAwesomeIcon
            className="dropdown-btn"
            icon={showDropdown ? faAngleUp : faAngleDown}
          />
        </NavLink>
      </div>

      <SubMenu root={menu.url} submenu={menu.submenu} show={showDropdown} />
    </li>
  );
}

export default Menu;
