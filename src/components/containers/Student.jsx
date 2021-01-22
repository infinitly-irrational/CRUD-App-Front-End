import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class Student extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      campus: "",
      imageURL: "", //image URL
      gpa: "",
      id: "",
    };
    this.campusExists = this.campusExists(this);
  }

  campusExists() {
    const name = this.state.campus;
    if (name === null) return "Student not currently enrolled in a campus";
    else return `Campus: ${name}`;
  }

  render() {
    return (
      <div>
        <img
          src={this.state.imageURL}
          width="230"
          height="230"
          alt="Student pic"
        />
        <div className="student-info">
          <ul>
            <li>Name : {`${this.state.firstName} ${this.state.lastName}`}</li>
            <li>Email : {this.state.email}</li>
            <li>GPA : {this.state.gpa}</li>
            <Link to="/campus/:index">
              <li>{this.campusExists()}</li>
            </Link>
          </ul>
        </div>
      </div>
    );
  }
}

export default Student;
