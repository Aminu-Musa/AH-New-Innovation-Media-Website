import React, { useState } from "react";
import { FaEnvelope, FaChevronDown, FaXTwitter } from "react-icons/fa6";
import { BiSolidPhoneCall } from "react-icons/bi";
import {
  FaGlobeAfrica,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import {NavLink, useNavigate } from "react-router-dom";
import { RiMenuFold2Line } from "react-icons/ri";

import logo from "../../src/img/AH_logo.svg";


// NAVBAR COMPONENT
const Navbar = () => {
  const navigate = useNavigate()
  const [showLangMenu, setShowLangMenu] = useState(false);
  const [slide_down_menu, setSlide_down_menu] = useState(false)
  const [show_menu, setShow_menu] = useState(false)

  // SLIDE NAVBAR ON SCROLL
  window.addEventListener('scroll', ()=>{
    if(window.scrollY > 500){
      setSlide_down_menu(true)  
    }else{
      setSlide_down_menu(false)
    }
  })

  const show_hide_menu = () => {
    setShow_menu((prev) => !prev);
  };

  const show_hide_lang_menu = () => {
    setShowLangMenu((prev) => !prev);
  
  };

  return (
    <header>
      <div className="top-header">
        <div className="container">
          <div className="top-header-left">
            <ul className="top-header-left-contact">
              <li>
                <a href="mailto:aminumusa669@gmail.com">
                  <FaEnvelope className="icon" size={15} /> info@ahmedia
                </a>
              </li>
              <li>
                <a href="tel:+2349060163364">
                  {" "}
                  <BiSolidPhoneCall className="icon call" size={20} />{" "}
                  +2349060163364
                </a>
              </li>
            </ul>
          </div>

          <div className="top-header-right">
            <div className="top-header-right-lang">
              <button className="lang-button" onClick={show_hide_lang_menu}>
                <div className="button">
                  <span>
                    <FaGlobeAfrica size={15} />
                  </span>
                  <span>EN</span>
                  <span>
                    <FaChevronDown />
                  </span>
                </div>

                <ul
                  className={
                    showLangMenu
                      ? "select-language"
                      : "select-language hide-lang-menu"
                  }
                >
                  <li>English</li>
                  <li>Hausa</li>
                </ul>
              </button>
            </div>

            <div className="top-header-right-social">
              <a href="">
                {" "}
                <FaFacebookF className="icon" size={20} />{" "}
              </a>
              <a href="">
                <FaXTwitter className="icon" size={20} />
              </a>
              <a href="">
                <FaInstagram className="icon" size={20} />
              </a>
              <a href="">
                <FaYoutube className="icon" size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className={slide_down_menu ? "main-header fixed" : " main-header"}>
        <div className="container">
          <div className="logo">
          
              <img src={logo} alt="logo image"  onClick={()=>{navigate('/')}}/>
      
          </div>
          <div className={show_menu ? "navbar open-nav": "navbar "}>
            <ul className="main-nav-menu">
              <li>
                <NavLink to="/" class="navlink">
                  Home{" "}
                </NavLink>
              </li>
              <li>
                <NavLink to="services" class="navlink">
                  Services{" "}
                </NavLink>
              </li>
              <li>
                <NavLink to="about" class="navlink">
                  About{" "}
                </NavLink>
              </li>
              <li>
                <NavLink to="contact" class="navlink">
                  Contact{" "}
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="hamburger" onClick={show_hide_menu}>
            <RiMenuFold2Line size={25} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
