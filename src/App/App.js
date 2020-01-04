import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import classes from './styles/App.css';
import Layout from '../layout/layout';

import HomeBuilder from '../home/pages/home/home';
import BreakfastBuilder from '../menu/pages/breakfast/breakfast';
import LunchBuilder from '../menu/pages/lunch/lunch';
import DinnerBuilder from '../menu/pages/dinner/dinner';
import DrinksBuilder from '../menu/pages/drinks/drinks';
import ReserveBuilder from '../reserve/pages/reserve/reserve';
import CartBuilder from '../order/pages/cart/cart';
import FoodModal from '../order/pages/foodModal/foodModal';
import PaymentBuilder from '../order/pages/payment/payment';

class App extends Component {
  render() {
    return (
      <div className={classes.App}>
        <Layout>
          <Switch>
            <Route path="/menu/breakfast" component={BreakfastBuilder} />
            <Route path="/menu/lunch" component={LunchBuilder} />
            <Route path="/menu/dinner" component={DinnerBuilder} />
            <Route path="/menu/drinks" component={DrinksBuilder} />
            <Route path="/reserve" component={ReserveBuilder} />
            <Route path="/cart" component={CartBuilder} />
            <Route path="/payment" component={PaymentBuilder} />
            <Route path="/" exact component={HomeBuilder} />
            <Redirect to="/" />
          </Switch>
          <FoodModal />
        </Layout>
      </div>
    );
  }
}

export default App;
