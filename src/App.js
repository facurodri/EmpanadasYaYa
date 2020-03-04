import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import Header from "./Header/Header";
// import Body from "./Body/Body";
// import Card from "./Body/Card";
import Footer from "./Footer/Footer";
import About from "./About";
import Menu from "./Menu";
import Contact from "./Contact";
import NoMatch from "./NoMatch";
import Home from "./Home";

function App() {
  return (
    <React.Fragment className="App">
      <Home />
      <Router>
        <Switch>
          {/* <Route exact path="/" component={Home} /> */}
          <Route exact path="/about" component={About} />
          <Route exact path="/menu" component={Menu} />
          <Route exact path="/contact" component={Contact} />
          <Route component={NoMatch} />
        </Switch>
      </Router>
      <Footer />
    </React.Fragment>
  );
}

export default App;
