import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./Footer.scss";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      {/* <div className="socialIcons">
        <Link to={"https://github.com/Hmtgit7/"}>
          <span className="icon">
            <FaFacebookF />
          </span>
        </Link>
        <Link to={"https://github.com/Hmtgit7/"}>
          <span className="icon">
            <FaInstagram />
          </span>
        </Link>
        <Link to={"https://github.com/Hmtgit7/"}>
          <span className="icon">
            <FaTwitter />
          </span>
        </Link>
        <Link to={"https://github.com/Hmtgit7/"}>
          <span className="icon">
            <FaLinkedin />
          </span>
        </Link>
      </div> */}

      <div className="socialIcons">
        <Link to={"https://github.com/Hmtgit7/"} className="icon">
          <FaFacebookF />
        </Link>
        <Link to={"https://github.com/Hmtgit7/"} className="icon">
          <FaInstagram />
        </Link>
        <Link to={"https://github.com/Hmtgit7/"} className="icon">
          <FaTwitter />
        </Link>
        <Link to={"https://github.com/Hmtgit7/"} className="icon">
          <FaLinkedin />
        </Link>
      </div>
      <ContentWrapper>
        {/* <ul className="menuItems">
                    <li className="menuItem">Terms Of Use</li>
                    <li className="menuItem">Privacy-Policy</li>
                    <li className="menuItem">About</li>
                    <li className="menuItem">Blog</li>
                    <li className="menuItem">FAQ</li>
                </ul> */}
        {/*  
                <div className="infoText">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur.
                </div>*/}

        <div className="copyrightText">
          Made with ❤️ Spark Developie Copyright @2024
        </div>
      </ContentWrapper>
    </footer>
  );
};

export default Footer;
