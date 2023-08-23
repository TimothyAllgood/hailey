import React from "react";
import "./Index.css";
import { Link } from "react-router-dom";
import CardMenu from "../CardMenu/CardMenu";
import Posts from "../Posts/Posts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Info from "../Info/Info";

function Index() {
  return (
    <main>
      <section className="splash">
        <div className="inner-splash">
          <div className="splash-text">
            <h3>
              Hello, Shalom, & Welcome! I'm Hailey and I'm excited you're here.
              Here we talk about, birth, adoption, oils, lifestyle freedom,
              Jesus and so much more!
            </h3>
            <div className="book-btn">
              <div className="book-text">
                <p>
                  <Link to="/wellness-consulation">
                    Book A Wellness Consultation
                  </Link>
                </p>
                <FontAwesomeIcon className="book-arrow" icon={faArrowRight} />
              </div>
              <div className="underline"></div>
            </div>
          </div>
          <div className="splash-img">
            <img
              src="https://images.unsplash.com/photo-1545945774-73922eb27813?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
              alt=""
            />
          </div>
        </div>
      </section>
      <Info />
      <CardMenu />
      <Posts />
    </main>
  );
}

export default Index;
