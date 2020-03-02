import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import Button from 'react-bootstrap/Button';
import Header from "./Header/Header";
import Body from "./Body/Body";
import Footer from "./Footer/Footer";
import Card from "./Body/Card";

function App() {
  return (
    <div className="App">
      <Body />
      <Header />
      <div className="row cardContainer">
        <Card />
        <Card />
        <Card />
      </div>
      <br />
      <Footer />
    </div>
  );
}

export default App;
