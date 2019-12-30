import React, { Component } from 'react';
import HomeBuilder from '../home/pages/home/home';
import { Route, Redirect, Switch } from 'react-router-dom';
import './styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/" exact component={HomeBuilder} />
          <Redirect to="/" />
        </Switch>
      </div>
    );
  }
}

export default App;
