import React from "react";
import "./CardItem.css";
import { Link } from "react-router-dom";

function CardItem({ item }) {
  return (
    <Link className="card">
      <p>
        0{item.num} {item.title}
      </p>
      <div
        className="card-img"
        style={{ backgroundImage: `url(${item.img})` }}
      ></div>
    </Link>
  );
}

export default CardItem;

/*
<Link className="card">
        <p>01 about me</p>
        <div className="card-img about-card"></div>
      </Link>
      <Link className="card">
        <p>02 adoption</p>
        <div className="card-img adoption-card"></div>
      </Link>
      <Link className="card">
        <p>03 ministry</p>
        <div className="card-img ministry-card"></div>
      </Link>
      <Link className="card">
        <p>04 health</p>
        <div className="card-img health-card"></div>
      </Link>
      <Link className="card">
        <p>05 birth</p>
        <div className="card-img"></div>
      </Link>
      <Link className="card">
        <p>06 fertility</p>
        <div className="card-img"></div>
      </Link>
*/
