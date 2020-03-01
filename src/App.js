import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Header from './Header/Header';
import Body from './Body/Body';
import Footer from './Footer/Footer';

function App() {
  return (
    <div className="App">
    <Header />
     <Body />
      <Footer />
    </div>
  );
}

export default App;
