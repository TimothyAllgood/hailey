import React from "react";
import { menuItems } from "../config/menuItems";
import "./Navbar.css";
import Menu from "../Menu/Menu";
import { Link } from "react-router-dom";

//  'adoption'
//  'adoption/faqs',
//  'adoption/resources',
//  'adoption/motherhood',

//  'ministry',
//  'ministry/feasts',
//  'ministry/apex-house',
//  'ministry/faith-and-fertility',

//  'health',
//  'health/oil-with-me',
//  'health/oils-101',
//  'health/blog',
//  'health/resources',

//  'birth',
//  'birth/care',
//  'birth/homebirth',
//  'birth/classes',
//  'birth/resources',

//  'fertility',
//  'fertility/resources',
//  'fertility/calls',

function Navbar() {
  return (
    <header>
      <nav>
        {}
        <ul>
          <Menu menu={menuItems.find((item) => item.title === "Adoption")} />
          <Menu menu={menuItems.find((item) => item.title === "Ministry")} />
          <Menu menu={menuItems.find((item) => item.title === "Health")} />
          <li className="logo">
            <Link to={"/"}>ha</Link>
          </li>
          <Menu menu={menuItems.find((item) => item.title === "Birth")} />
          <Menu menu={menuItems.find((item) => item.title === "Fertility")} />
          <Menu menu={menuItems.find((item) => item.title === "About")} />
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
