import React, { Component } from "react";
import "./App.css";
import RoutesContainer from "../components/routes/RoutesContainer";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Students from "../components/containers/Students";
import Home from "../components/containers/Home";
import Campus from "../components/containers/Campus";
import Campuses from "../components/containers/Campuses";
import Student from "../components/containers/Student.jsx";
import Navigation from "../components/containers/Navigation";

class App extends Component {
  render() {
    return (
      <div className="app">
        <Navigation />
      </div>
    );
  }
}

export default App;
