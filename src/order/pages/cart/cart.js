import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import classes from './styles/cart.css';
import globalClasses from '../../../shared/styles/globalClasses/globalClasses.css';
import MenuItem from '../../../shared/components/menuItem/menuItem';

class Cart extends Component {
    submitHandler = () => {
        this.props.history.push('/payment');
    }
    render() {
        let menuItems = this.props.cart.map((item, index) => {
            return <MenuItem
                key={index}
                index={index}
                name={item.name}
                price={item.price}
                quantity={item.quantity}
                orderItem />
        })

        let totalPrice = 0;
        this.props.cart.forEach(item => {
            totalPrice += item.quantity * item.price;
        })
        totalPrice = totalPrice.toFixed(2)

        let cart = <h3 className={classes.NoItems}>No items in your cart</h3>;
        if (this.props.cart.length > 0) {
            cart = (
                <div className={[globalClasses.Container, classes.CartContainer].join(' ')}>
                    <header className={classes.Header}>
                        <h2>Your Cart</h2>
                    </header>
                    <div className={classes.ItemsContainer}>
                        {menuItems}
                    </div>
                    <div className={classes.TotalContainer}>
                        <p>Total</p>
                        <p>${totalPrice}</p>
                    </div>
                    <button className={classes.CheckoutBtn} onClick={this.submitHandler}>Proceed To Checkout</button>
                </div>
            )
        }
        return cart;
    }
}

const mapStateToProps = state => {
    return {
        cart: state.cart
    }
}

export default connect(mapStateToProps)(withRouter(Cart));