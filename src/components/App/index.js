import { Container } from "@material-ui/core";
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "../../styles.css";
import About from "../About";
import Home from "../Home";

const App = () => (
  <Router>
    <Container maxWidth="sm">
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
    </Container>
  </Router>
);

export default App;
