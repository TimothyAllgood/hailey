import React from "react";
import "./Info.css";
import { Link } from "react-router-dom";

function Info() {
  return (
    <section className="info">
      <div className="info-container">
        <div className="quote bordered">
          <p>
            But to all who did receive him, who believed in his name, he gave
            the right to become children of God. Who were born, not of blood nor
            of the will of the flesh nor of the will of man, but of God. - John
            1:12-13
          </p>
        </div>
        <span className="vertical-divider"></span>
        <div className="resources bordered">
          <Link
            to="https://view.flodesk.com/pages/620abbd4e0eda1a0d870abcc"
            target="_blank"
          >
            <div className="btn">Subscribe</div>
          </Link>
          <div className="btn">Team Resources</div>
        </div>
      </div>
    </section>
  );
}

export default Info;
