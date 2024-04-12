import React, { useState, useEffect } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { SlMenu } from "react-icons/sl";
import { VscChromeClose } from "react-icons/vsc";
import { useNavigate, useLocation } from "react-router-dom";

import "./Header.scss";

import ContentWrapper from "../contentWrapper/ContentWrapper";
import logo from "../../assets/movix-logo.svg";

const Header = () => {
  const [show, setShow] = useState("top");
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [query, setQuery] = useState("");
  const [showSearch, setShowSearch] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const navigationHandler=(path)=>{
    navigate(path);
  }

  return (
    <header className="header">
      <ContentWrapper>
        <div className="logo">
          {/* <img src={logo} alt="movie-flixer" /> */}
          <span>Movie Flixer</span>
        </div>
        <ul className="menuItems">
          <li className="menuItems">Movies</li>
          <li className="menuItems">TV Shows</li>
          <li className="menuItems"><HiOutlineSearch/></li>
        </ul>
      </ContentWrapper>
    </header>
  );
};

export default Header;
