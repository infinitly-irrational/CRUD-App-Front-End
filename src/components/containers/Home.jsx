import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";

class Home extends Component {
  state = {
    randomImage: "",
  };
  render() {
    return (
      <div>
        <img src={this.state.randomImage} alt="campus image" />
      </div>
    );
  }
}

export default Home;
