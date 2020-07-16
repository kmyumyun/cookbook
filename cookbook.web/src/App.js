import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/nav/Header";
import Home from "./components/static/Home";
import About from "./components/static/About";
import AccountControl from "./components/account/AccountControl";
import Footer from "./components/nav/Footer";
require("./resources/util");

function App() {
  return (
    <Router>
      <div className="header">
        <Header />
      </div>
      <div className="main-body">
        <div className="content">
          <Switch>
            <Route path="/home" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/account" component={AccountControl} />
          </Switch>
        </div>
      </div>
      <footer>
        <div className="footer-content">
          <Footer />
        </div>
      </footer>
    </Router>
  );
}

export default App;
