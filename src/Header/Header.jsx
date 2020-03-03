import React, { useLayoutEffect } from "react";
import "react-bootstrap";
import "./Header.css";
import { FiMenu } from 'react-icons/fi';

const Header = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-12">
          <nav className="navbar navbar-expand-lg">
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navLogo"
              aria-controls="navLogo"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"><FiMenu /></span>
            </button>
            <a href="#">
              <img
                src="./images/FullSizeRender.jpeg"
                className="navbar-brand logo"
                alt="logo"
              ></img>
            </a>
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav mr-auto mt-2 mt-lg-0" id="navLogo">
                <li className="nav-item">
                 <a className="nav-item nav-link active" href="#">
                  <h3>Home </h3>
                </a>
                </li>
                <li className="nav-item">
                <a className="nav-item nav-link" href="#">
                  <h3>Menu</h3>
                </a>
                </li>
                <li className="nav-item">
                <a className="nav-item nav-link" href="#">
                  <h3>About</h3>
                </a>
                </li>
                <li className="nav-item">
                <a className="nav-item nav-link" href="#">
                  <h3>Contact</h3>
                </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};
export default Header;
