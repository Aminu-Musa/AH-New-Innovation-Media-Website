import React from "react";
import { NavLink } from "react-router-dom";
import ready_work_img from "../img/ready-to-work-about-img.jpg";
import SiteHeading from "../components/SiteHeading";
import Preloader from "../components/Preloader";

const About = () => {
  document.title = "About | A&H";

  return (
    <>
      <div className="site-breadcrumb-about-us">
        <div className="container">
          <h2>About Us</h2>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About Us</NavLink>
            </li>
          </ul>
        </div>
      </div>

      <section className="about-us">
        <div className="container">
          <div className="ready-to-work-about">
            <span className="shadow"></span>
            <div className="ready-to-work-img">
              <img src={ready_work_img} alt="" />
            </div>
          </div>

          <div className="about-us-col-2">
            <SiteHeading
              tagline="About Us"
              title="We Are Always Ready To Print Your Works"
              shadow="About"
              className={"about-text"}
            />

            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>

            <ul>
              <li>We Are Always Ready To Print Your Works</li>
              <li>We Are Always Ready To Print Your Works</li>
              <li>We Are Always Ready To Print Your Works</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
