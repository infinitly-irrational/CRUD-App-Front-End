import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import React, { Component } from "react";
import Students from "./Students";
import Home from "./Home.jsx";
import Campus from "./Campus.jsx";
import Campuses from "./Campuses.jsx";
import Student from "./Student.jsx";

class Navigation extends Component {
  state = {};
  render() {
    return (
      <div className="nav">
        <div className="navigation-bar">
          <button>
            <Link to="/home">Home</Link>
          </button>
          <button>
            <Link to="/campuses">Campuses</Link>
          </button>
          <button>
            <Link to="/students">Students</Link>
          </button>
        </div>
        <div>
          <Switch>
            <Route path="/students/:studentId" component={Student} />

            <Route path="/campus/:campusName" component={Campus} />

            <Route path="/students/" component={Students} />

            <Route path="/campuses" component={Campuses} />

            <Route path="/" component={Home} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default Navigation;
