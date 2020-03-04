import React from "react";
import { Container } from 'react-bootstrap';
import { Header } from './Header/Header';

const Home = (props) => {
  return (
    <Container fluid className="jumbotron-fluid">
      <img
        src="./images/empanadas2.jpg"
        className="jumboPic"
        alt="Empanadas Main"
      />
      <row>
        <h1 className="display-4">Empanadas Goal</h1>
        <p className="lead">The best homemade empanadas you will taste!</p>
        <hr className="my-4" />
      </row>
      <Header />
    </Container>
  );
};

export default Home;
