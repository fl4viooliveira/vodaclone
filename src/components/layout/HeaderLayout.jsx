import React, { useState } from "react";
import "./HeaderLayout.css";
import * as Constants from "../data/svg.js";
import { BrowserRouter as Router, Link } from "react-router-dom";

export default function HeaderLayout(props) {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <div className="container-header">
      <div className="top">
        <div className="top-menu">
          <nav className="top-left">
            <span>{Constants.personalIcon}</span>
            <a href="#0">Personal</a>
            <span>{Constants.businessIcon}</span>
            <a href="#0">Business</a>
          </nav>
          <nav className="top-right">
            <span>{Constants.findStoreIcon}</span>
            <a href="#0">Find a store</a>
            <span>{Constants.networkIcon}</span>
            <a href="#0">Network Status Checker</a>
          </nav>
        </div>
      </div>
      <div className="main">
        <div className="main-menu">
          <div className="logo">
            <Link to={`${process.env.PUBLIC_URL}/`}>{Constants.logo}</Link>
          </div>
          <div className="menu-list">
            <ul
              className={click ? "header-menu active" : "header-menu"}
              onClick={handleClick}
            >
              <li className="menu-item">
                <Link to={`${process.env.PUBLIC_URL}/list`}>Shop</Link>
              </li>
              <li className="menu-item">
                <Link to={`${process.env.PUBLIC_URL}/list`}>Why Vodafone</Link>
              </li>
              <li className="menu-item">
                <Link to={`${process.env.PUBLIC_URL}/list`}>Help</Link>
              </li>
              <li className="menu-item">
                <Link to={`${process.env.PUBLIC_URL}/list`}>My Vodafone</Link>
              </li>
            </ul>
            <ul className="right-icons">
              <li className="cart">{Constants.cartIcon}</li>
              <li className="search">{Constants.searchIcon}</li>
              <li className="user">{Constants.userIcon}</li>
            </ul>
          </div>
          <div
            className={click ? "burger active" : "burger"}
            onClick={handleClick}
          >
            {Constants.burgerIcon}
          </div>
          <div
            className={click ? "close" : "close active"}
            onClick={handleClick}
          >
            {Constants.closeIcon}
          </div>
        </div>
      </div>
    </div>
  );
}
