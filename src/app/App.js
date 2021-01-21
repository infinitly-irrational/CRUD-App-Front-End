import React, { Component } from 'react';
import './App.css';
import RoutesContainer from '../components/routes/RoutesContainer';
import Nav from '../components/views/nav';

class App extends Component {
  render() {
    return (
      <div className="app">
          <Nav/>
          
          <RoutesContainer />
          
      </div>
    );
  }
}

export default App;
