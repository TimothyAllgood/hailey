import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "./Sidebar.css";

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="about">
        <h2>About Me</h2>
        <img
          className="about-img"
          src="https://images.unsplash.com/photo-1483884105135-c06ea81a7a80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
          alt=""
        />
        <div className="blurb">
          <p>
            My name is Hailey Joy Miranda Aliff, and I am a trained and
            certified doula and childbirth educator as well as a full-time
            student midwife. I offer many services both individually and within
            packages including labor doula services, pregnancy and newborn
            photography, placenta preparation and essential oils. I am also a
            midwife-in-training and have a full-time apprenticeship with local
            homebirth LM, CPM Emmy Trammell.
          </p>

          <Link className="about-link" to="/about">
            Learn More{" "}
            <FontAwesomeIcon className="book-arrow" icon={faArrowRight} />
            <div className="underline"></div>
          </Link>
        </div>
      </div>
      <div className="subscribe">
        <Link
          to="https://view.flodesk.com/pages/620abbd4e0eda1a0d870abcc"
          target="_blank"
        >
          <p className="subscribe-btn">Subscribe to Newsletter</p>
        </Link>
      </div>
      <div className="instagram"></div>
    </aside>
  );
}

export default Sidebar;
