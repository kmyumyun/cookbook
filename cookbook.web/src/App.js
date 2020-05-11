import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import clogo from "./cookbook-logo.png"
import './App.css';
import Header from "./components/nav/Header"
import Home from "./components/static/Home";
import About from "./components/static/About";

function App() {
  return (
    <Switch>
      <Route path="/home" component={Home} />
      <Route path="/about" component={About} />
    </Switch>
  );
}

export default App;
