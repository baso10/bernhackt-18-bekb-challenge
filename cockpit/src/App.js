import React, { Component } from "react";
import "./App.css";
import Orderscreen from "./Orderscreen";
import withRoot from "./withRoot";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Dashboard from "./containers/Dashboard";
import Profile from "./containers/Profile";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Route exact path="/" component={Orderscreen} />
          <Route path="/me" component={Profile} />
          <Route path="/mycashflow" component={Dashboard} />
          <Route path="/invoices" component={Orderscreen} />
        </div>
      </Router>
    );
  }
}

export default withRoot(App);
