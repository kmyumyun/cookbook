import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./Nav.css";
import loc from "../../resources/lang/localization";

class Header extends React.Component {
  render() {
    return (
      <div className="navbar">
        <div className="nav-page">
          <div className="nav-link">
            <Link to={"/home"}>{loc.home}</Link>
          </div>
          <div className="nav-link">
            <Link to={"/recipes"}>About</Link>
          </div>
        </div>
        <div className="nav-account">
          <div className="nav-link">
            <Link to={"/account"}>AccPH</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
