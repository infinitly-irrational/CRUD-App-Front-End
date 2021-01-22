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

        <Switch>
          <Route path="/students/:studentId" component={Student} />

          <Route path="/campus/:campusName" component={Campus} />

          <Route path="/students/" component={Students} />

          <Route path="/campuses" component={Campuses} />

          <Route path="/" component={Home} />
        </Switch>
      </div>
    );
  }
}

export default Navigation;
