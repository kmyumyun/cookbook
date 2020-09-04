import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  BrowserRouter,
} from "react-router-dom";
import "./App.css";
import Header from "./components/nav/Header";
import Home from "./components/static/Home";
import About from "./components/static/About";
import AccountControl from "./components/account/AccountControl";
import Footer from "./components/nav/Footer";
import RecipeDetails from "./components/recipe/RecipeDetails";

function App() {
  return (
    <Router>
      <div className="header">
        <Header />
      </div>
      <div className="main-body">
        <div className="content">
          <Switch>
            <Route exact path="/home" component={Home} />
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/account" component={AccountControl} />
            <Route exact path="/recipe/:id" component={RecipeDetails} />
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
