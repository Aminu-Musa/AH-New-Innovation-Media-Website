import React from "react";
import { NavLink } from "react-router-dom";
import { FaPhone, FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoTimeSharp } from "react-icons/io5";
import { BsSend } from "react-icons/bs";

const Contact = () => {
  document.title = "Contact | A&H";
  return (
    <>
      <div className="site-breadcrumb">
        <div className="container ">
          <h2>Contact Us</h2>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact Us</NavLink>
            </li>
          </ul>
        </div>
      </div>

      <div className="contact_us_section">
        <div className="container">
          <div className="address-col">
            <div className="address-row">
              <div className="address-icon address-location">
                <div className="contact-address contact-icon">
                  <FaLocationDot size={25} />
                </div>
              </div>
              <div className="address-info">
                <h5>Office Address</h5>
                <p> Beside Ibn Umair Juma'at Mosque Old Minna Garage</p>
              </div>
            </div>

            <div className="address-row">
              <div className="address-icon call-us">
                <div className="contact-address call-us-icon">
                  <MdEmail size={30} />
                </div>
              </div>
              <div className="address-info">
                <h5>Call Us</h5>
                <p> +2349060163364</p>
              </div>
            </div>

            <div className="address-row">
              <div className="address-icon email-us">
                <div className="contact-address email-us-icon">
                  <FaPhone size={25} />
                </div>
              </div>
              <div className="address-info">
                <h5>Email Us</h5>
                <p> info@ahmedia.com</p>
              </div>
            </div>

            <div className="address-row">
              <div className="address-icon office-open">
                <div className="contact-address office-open-icon">
                  <IoTimeSharp size={25} />
                </div>
              </div>
              <div className="address-info">
                <h5>Office Open</h5>
                <p> Sun - Fri (08AM - 09PM)</p>
              </div>
            </div>
          </div>

          <div className="message-col">
            <div className="form-header">
              <h5>Get In Touch</h5>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page randomised words which don't
                look even slightly when looking at its layout.
              </p>
            </div>
            <form action="" className="contact-form">
              <div className="name-email">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your name"
                  />
                </div>

                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Your email"
                  />
                </div>
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Email Subject"
                />
              </div>
              <div className="form-group">
                <textarea
                  className="form-control"
                  placeholder="Write Your Message"
                  rows="5"
                ></textarea>
              </div>
              <div>
                <div className="send-btn">
                  <button className="">
                    {" "}
                    Send Message{" "}
                    <div className="send-icon">
                      <BsSend size={20} />
                    </div>{" "}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
        <div className="google-location-map">
        <iframe src="https://www.google.com/maps/d/embed?mid=1LWS_1EKBJIJsJzAFguLLrzX1Z-9nNEo&hl=en&ehbc=2E312F" className="google-map-iframe"></iframe>


        {/* <iframe src="https://www.google.com/maps/d/embed?mid=1LWS_1EKBJIJsJzAFguLLrzX1Z-9nNEo&hl=en&ehbc=2E312F" className="google-map-iframe"></iframe> */}
        </div>
    </>
  );
};

export default Contact;
