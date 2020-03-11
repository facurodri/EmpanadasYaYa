import React from "react";
import EmpanadaCard from "./Body/Card";
import { Container, Col, Row } from "react-bootstrap";

const Menu = () => {
  return (
    <Container className="menu">
        <h1 className="banner text-center"> Menu </h1>
      <Row>     
      <Col xs={12} md={6} lg={4}><EmpanadaCard /></Col>
      <Col xs={12} md={6} lg={4}><EmpanadaCard /></Col>
      <Col xs={12} md={6} lg={4}><EmpanadaCard /></Col>
      <Col xs={12} md={6} lg={4}><EmpanadaCard /></Col>
      <Col xs={12} md={6} lg={4}><EmpanadaCard /></Col>
      </Row>
    </Container>
  );
};

export default Menu;
