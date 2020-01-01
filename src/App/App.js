import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import classes from './styles/App.css';
import Layout from '../layout/layout';

import HomeBuilder from '../home/pages/home/home';
import BreakfastBuilder from '../menu/pages/breakfast/breakfast';
import LunchBuilder from '../menu/pages/lunch/lunch';
import DinnerBuilder from '../menu/pages/dinner/dinner';
import DrinksBuilder from '../menu/pages/drinks/drinks';

class App extends Component {
  render() {
    return (
      <div className={classes.App}>
        <Layout>
          <Switch>
            <Route path="/menu/breakfast" exact component={BreakfastBuilder} />
            <Route path="/menu/lunch" exact component={LunchBuilder} />
            <Route path="/menu/dinner" exact component={DinnerBuilder} />
            <Route path="/menu/drinks" exact component={DrinksBuilder} />
            <Route path="/" exact component={HomeBuilder} />
            <Redirect to="/" />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
