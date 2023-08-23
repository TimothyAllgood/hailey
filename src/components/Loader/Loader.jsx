import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import "./Loader.css";

function Loader() {
  return (
    <div className="loader-container">
      <FontAwesomeIcon icon={faCircleNotch} className="loader" />
    </div>
  );
}

export default Loader;
