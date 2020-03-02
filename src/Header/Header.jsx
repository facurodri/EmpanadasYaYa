import React from "react";
import "react-bootstrap";
import "./Header.css";

const Header = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-12">
          <nav className="navbar">
            <img
              src="./images/FullSizeRender.jpeg"
              className="logo"
              alt="logo"
            />
          </nav>
        </div>
      </div>
    </div>
  );
};
export default Header;
