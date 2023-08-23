import React from "react";
import "./Ministry.css";

function Ministry() {
  return (
    <section className="ministry page-container">
      <h2>Ministries We Support</h2>
      <div className="cards">
        <div className="card">
          <img src="https://picsum.photos/400/500" alt="" />
          <div className="ministry-info">
            <h3>The Nehemiah Project</h3>
            <p>
              The Nehemiah Project specializes in Addiction Recovery,
              Counseling, Marriage counseling in the Northshore; Mandeville,
              Covington, Madisonville, LA
            </p>
            <a className="btn" href="#">
              Visit Site
            </a>
          </div>
        </div>
        <div className="card">
          <img src="https://picsum.photos/400/500" alt="" />
          <div className="ministry-info">
            <h3>Lev Haloam</h3>
            <p>
              Lev Haolam is an organization that supports local Jewish business
              owners in Judea and Samaria who are suffering because of the
              anti-Israel Boycott, Divestment and Sanctions (BDS) movement.
            </p>
            <a className="btn" href="#">
              Visit Site
            </a>
          </div>
        </div>
        <div className="card">
          <img src="https://picsum.photos/400/500" alt="" />
          <div className="ministry-info">
            <h3>Campus Outreach</h3>
            <p>
              Campus Outreach is a network of interdenominational ministries
              targeting strategic college campuses in the United States and
              throughout the world.
            </p>
            <a className="btn" href="#">
              Visit Site
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Ministry;
