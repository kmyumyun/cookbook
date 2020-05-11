import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./Nav.css";

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <div className="navbar">
          <div className="nav-page">
            <div className="nav-link">
              <Link to={"/home"}>Home</Link>
            </div>
            <div className="nav-link">
              <Link to={"/about"}>About</Link>
            </div>
            <div className="nav-link">
              <Link to={"/about"}>About</Link>
            </div>
          </div>
          <div className="nav-account">
            <div className="nav-link">
              <Link to={"/login"}>Login</Link>
            </div>
            <div className="nav-link">
              <Link to={"/register"}>Register</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
