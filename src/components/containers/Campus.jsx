import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";

class Campus extends Component {
  state = {
    name: "",
    address: "",
    description: "",
    imageURL: "",
    students: [],
  };

  render() {
    // let { id } = useParams();
    return (
      <div className="campus">
        <h1>{this.state.name}</h1>
        <img src={this.imageURL} alt="campus" />
        <ul style={{ listStyleType: "none" }}>
          <li>{this.state.address}</li>
          <li>{this.state.description}</li>
        </ul>
        <ol className="Studens">
          {this.state.students.map((student, index) => {
            return (
              <Link to="/campus/student/:index">
                <li key="index">{student.name}</li>
              </Link>
            );
          })}
        </ol>
      </div>
    );
  }
}

export default Campus;
