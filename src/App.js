import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import NavBar from "./widgets/NavBar";
import About from "./views/About";
import Blog from "./views/Blog";
import Email from "./views/Email";
import Contact from "./views/Contact";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <NavBar />
          <div
            style={{
              justifyContent: "flex-start",
              display: "flex",
              marginTop: "5px"
            }}
          />
          <Route exact path="/" component={About} />
          <Route path="/email" component={Email} />
          <Route path="/blog" component={Blog} />
          <Route path="/contact" component={Contact} />
        </div>
      </Router>
    );
  }
}

export default App;
