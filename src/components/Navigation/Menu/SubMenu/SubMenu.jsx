import React from "react";
import "./SubMenu.css";
import { Link } from "react-router-dom";

function SubMenu({ root, submenu, show }) {
  return (
    <ul className={show ? "dropdown dropdown-show" : "dropdown"}>
      {submenu.map((menu, i) => {
        return (
          <li key={i}>
            <Link to={`${root}/${menu.url}`}>{menu.title}</Link>
          </li>
        );
      })}
    </ul>
  );
}

export default SubMenu;
