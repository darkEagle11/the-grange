import React, { Component } from 'react';
import HomeBuilder from '../home/pages/home/home';
import { Route, Redirect, Switch } from 'react-router-dom';
import classes from './styles/App.css';
import Layout from '../layout/layout';

class App extends Component {
  render() {
    return (
      <div className={classes.App}>
        <Layout>
          <Switch>
            <Route path="/" exact component={HomeBuilder} />
            <Redirect to="/" />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
