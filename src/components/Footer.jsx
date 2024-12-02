import React from "react";
import { Navigate, NavLink, useNavigate } from "react-router-dom";
import logo from "../../src/img/AH_logo.svg";
import {
  FaPhone,
  FaLocationDot,
  FaFacebookF,
  FaXTwitter,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { TfiAngleDoubleRight } from "react-icons/tfi";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer>
      <div className="container">
        <div className="foot-col footer-logo">
          <img
            src={logo}
            alt="logo image"
            srcset=""
            onClick={() => navigate("/")}
          />
          <p>
            We are many variations of passages available but the majority have
            suffered alteration in some form by injected humour words
            believable.
          </p>
          <ul className="footer-contact">
            <li>
              <a href="tel:+2349060163364">
                <FaPhone className="icons" />
                +2349060163363
              </a>
            </li>
            <li>
              <FaLocationDot className="icons" />
              <span>Beside Ibn Umair Juma'at Mosque Old Minna Garage</span>
            </li>
            <li>
              <a href="mailto:aminumusa669@gmail.com">
                <MdEmail className="icons" /> info@ahmedia.com
              </a>
            </li>
          </ul>
        </div>
        <div className="foot-col quick-links">
          <h4>Quick Links</h4>
          <ul className="footer-list">
            <li>
              <NavLink to="about">
                {" "}
                <TfiAngleDoubleRight />
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink to="home">
                {" "}
                <TfiAngleDoubleRight /> FAQ's{" "}
              </NavLink>
            </li>
            <li>
              <NavLink to="#">
                {" "}
                <TfiAngleDoubleRight />
                Terms Of Service
              </NavLink>
            </li>
            <li>
              <NavLink to="#">
                {" "}
                <TfiAngleDoubleRight />
                Privacy policy
              </NavLink>
            </li>
            <li>
              <NavLink to="#">
                {" "}
                <TfiAngleDoubleRight /> Our Services
              </NavLink>
            </li>
            <li>
              <NavLink to="#">
                {" "}
                <TfiAngleDoubleRight /> Latest Blog
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="foot-col our-services">
          <h4>Our Services</h4>
          <ul className="footer-list">
            <li>
              <NavLink to="">
                {" "}
                <TfiAngleDoubleRight />
                Offset Printing
              </NavLink>
            </li>
            <li>
              <NavLink to="#">
                {" "}
                <TfiAngleDoubleRight /> Business Card
              </NavLink>
            </li>
            <li>
              <NavLink to="#">
                {" "}
                <TfiAngleDoubleRight />
                Design & Branding
              </NavLink>
            </li>
            <li>
              <NavLink to="#">
                {" "}
                <TfiAngleDoubleRight />
                3D Design & Printing
              </NavLink>
            </li>
            <li>
              <NavLink to="#">
                {" "}
                <TfiAngleDoubleRight /> Mug Printing
              </NavLink>
            </li>
            <li>
              <NavLink to="#">
                {" "}
                <TfiAngleDoubleRight /> T-Shirt Printing
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="foot-col newsletter">
          <h4>Newsletter</h4>
          <p>Subscribe Our Newsletter To Get Latest Update And News</p>
          <form action="">
            <input type="email" placeholder="Your Email" />
            <button type="submit">
              <MdEmail size={20} className="icons" /> Subscribe Now
            </button>
          </form>
        </div>
      </div>
      <div className="footer-end">
        <div className="wrapper">
          <div>
            Copyright © {new Date().getFullYear()}. All rights reserved.
          </div>
          <div className="footer-social-media">
            <ul className="footer-social-media-links">
              <li>
                <a href="">
                  <FaFacebookF className="" size={20} />
                </a>
              </li>
              <li>
                <a href="">
                  <FaXTwitter className="" size={20} />
                </a>
              </li>
              <li>
                <a href="">
                  <FaInstagram className="" size={20} />
                </a>
              </li>

              <li>
                <a href="">
                  <FaYoutube className="" size={20} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
