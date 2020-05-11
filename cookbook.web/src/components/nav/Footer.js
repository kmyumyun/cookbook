import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "../static/Home";
import About from "../static/About";

class Footer extends React.Component {
  render() {
    return (
      <div>
        <span>Footer Nav</span>
        <ul>
          <li>
            <Link to={"/home"}>Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Footer;
