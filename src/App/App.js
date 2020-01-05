import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import classes from './styles/App.css';
import Layout from '../layout/layout';

import HomeBuilder from '../home/pages/home/home';
import asyncComponent from '../shared/components/asyncComponent/asyncComponent';

const BreakfastBuilder = asyncComponent(() => import('../menu/pages/breakfast/breakfast'));
const LunchBuilder = asyncComponent(() => import('../menu/pages/lunch/lunch'));
const DinnerBuilder = asyncComponent(() => import('../menu/pages/dinner/dinner'))
const DrinksBuilder = asyncComponent(() => import('../menu/pages/drinks/drinks'))
const ReserveBuilder = asyncComponent(() => import('../reserve/pages/reserve/reserve'));
const CartBuilder = asyncComponent(() => import('../order/pages/cart/cart'));
const FoodModal = asyncComponent(() => import('../order/pages/foodModal/foodModal'));
const PaymentBuilder = asyncComponent(() => import('../order/pages/payment/payment'));



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
