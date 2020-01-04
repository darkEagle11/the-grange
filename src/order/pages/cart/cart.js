import React, { Component } from 'react';
import { connect } from 'react-redux';

import classes from './styles/cart.css';
import globalClasses from '../../../shared/styles/globalClasses/globalClasses.css';
import MenuItem from '../../../shared/components/menuItem/menuItem';

class Cart extends Component {
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
        return (
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
                <button className={classes.CheckoutBtn}>Proceed To Checkout</button>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        cart: state.cart
    }
}

export default connect(mapStateToProps)(Cart);