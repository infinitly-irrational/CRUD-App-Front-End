import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Student from "./Student.jsx";

class StudentView extends Component {
  state = {};
  render() {
    return (
      <div>
        <Student />;
      </div>
    );
  }
}

export default StudentView;
