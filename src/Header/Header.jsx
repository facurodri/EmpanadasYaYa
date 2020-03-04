import React, { useLayoutEffect } from "react";
import { Nav, Navbar } from "react-bootstrap";
import "./Header.css";
import { FiMenu } from "react-icons/fi";

export const Header = () => (
    <Navbar className="container-fluid">
      <Navbar.Brand href="/">
        {/* <img
          src="./images/FullSizeRender.jpeg"
          className="navbar-brand logo"
          alt="logo"
        ></img> */}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navToggle" />
       <Navbar.Collapse id="navToggle">
         <Nav className="ml-auto links">
          <Nav.Item>
            <Nav.Link href="/">About 
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/">Menu 
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/">Contact
            </Nav.Link>
          </Nav.Item>
         </Nav>
       </Navbar.Collapse>
          <FiMenu />
    </Navbar>
  )
