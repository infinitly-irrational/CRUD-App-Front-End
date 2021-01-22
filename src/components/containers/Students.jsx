import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class Students extends Component {
  state = {
    students: [],
  };
  render() {
    return (
      <div className="students">
        <ol>
          {this.state.students.map((student, index) => {
            return (
              <Link to="/students/:index">
                <li key={index}>{student.firstName}</li>;
              </Link>
            );
          })}
        </ol>
      </div>
    );
  }
}

export default Students;
