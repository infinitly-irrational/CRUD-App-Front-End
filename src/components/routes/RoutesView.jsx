import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { AllPlayersContainer } from '../containers';
import { AllCampusesContainer } from '../containers';
import { AllStudentsContainer } from '../containers';

const RoutesView = () => {
  return (
    <Switch>
      <Route exact path="/" component={AllPlayersContainer} />
      <Route exact path="/campuses" component={AllCampusesContainer} />
      <Route exact path="/students" component={AllStudentsContainer} />
    </Switch>
  )
}

export default RoutesView;
