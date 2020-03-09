import React from "react";
import { Jumbotron, Container } from 'react-bootstrap';
// import { Header } from './Header/Header';
// import mainEmpanadasPic from '../src/images/empanadas2';
// import styled from 'styled-components';

const Home = (props) => {
  return (
    <Jumbotron fluid className="mainEmpanadasPic">
      <Container className="jumboPic"> 
      <div className="overlay"></div>
        <h1 className="display-1">Empanadas Goal</h1>
        <h5 className="lead">The best homemade empanadas you will taste!</h5>
        <hr className="my-4" />
      </Container>
    </Jumbotron>
  );
};

export default Home;
