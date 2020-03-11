import React from "react";
import { Card, Img, Text } from "react-bootstrap";

const EmpanadaCard = () => {
  return (
    <Card className="text-center">
      <Card.Img  variant="top" className="cardPic" />
      <Card.Body className="card-body">
        <Card.Title className="card-text">Empandas de Carne</Card.Title>
        <Card.Text> Golden brown beef empanadas</Card.Text>
      </Card.Body>
      <br />
    </Card>
  );
};

export default EmpanadaCard;
