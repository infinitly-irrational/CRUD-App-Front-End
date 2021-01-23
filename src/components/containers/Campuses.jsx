import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import Campus from "./Campus.jsx";
import axios from "axios";

class Campuses extends Component {
  state = {
    campuses: [],
  };

  componentDidMount() {
    axios
      .get({
        /*INSERT URL HERE*/
      })
      .then((res) => {
        const campusesList = res.data;
        this.setState({ campuses: campusesList });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="campusList">
        <ol>
          {this.state.campuses.map((campus, index) => {
            return (
              <Link to="/campus/:index">
                <li key={campus.name}>{campus.name}</li>;
              </Link>
            );
          })}
        </ol>
      </div>
    );
  }
}

export default Campuses;
