import React, { useLayoutEffect } from "react";
import { Nav, Navbar } from "react-bootstrap";
import "./Header.css";
import { FiMenu } from "react-icons/fi";

export const Header = () => (
    <Navbar fluid text-white>
      {/* <Navbar.Brand href="/">
       <img className="logo"/>
      </Navbar.Brand> */}
      <Navbar.Toggle aria-controls="navToggle" />
       <Navbar.Collapse id="navToggle">
         <Nav className="ml-auto links">
          <Nav.Item>
            <Nav.Link href="/about">About 
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/menu">Menu 
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/contact">Contact
            </Nav.Link>
          </Nav.Item>
         </Nav>
       </Navbar.Collapse>
          <FiMenu />
    </Navbar>
  )
