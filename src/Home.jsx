import React from "react";
import { Jumbotron, Container } from 'react-bootstrap';
import { Header } from './Header/Header';
// import mainEmpanadasPic from '../public/images/empanadas2';
// import styled from 'styled-components';

// const Styles = styled.div`
//     .mainEmpanadasPic {
//         background: url(${mainEmpanadasPic}) no-repeat fixed bottom;
//         background-size: cover;
//     }
// `;

const Home = (props) => {
  return (
    //   <Styles>
    <Jumbotron fluid className="mainEmpanadasPic">
      <img
        src="./images/empanadas2.jpg"
        className="jumboPic"
        alt="Empanadas Main"
      />
      <div className="overlay"></div>
      <Container>
        <h1 className="display-4">Empanadas Goal</h1>
        <p className="lead">The best homemade empanadas you will taste!</p>
        <hr className="my-4" />
      </Container>
      <Header />
    </Jumbotron>
    // </Styles>
  );
};

export default Home;
