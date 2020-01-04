import React, { Component } from 'react';
import { StripeProvider, Elements } from 'react-stripe-elements';
import { connect } from 'react-redux';

import PaymentForm from '../../components/PaymentForm/PaymentForm';
import globalClasses from '../../../shared/styles/globalClasses/globalClasses.css';
import classes from './styles/payment.css';
import * as orderActions from '../../store/actions';

class Payment extends Component {
    render() {
        let totalPrice = 0;
        this.props.cart.forEach(item => {
            totalPrice += item.quantity * item.price;
        })
        totalPrice = totalPrice.toFixed(2)
        return (
            <React.Fragment>
                <div className={[classes.PaymentContainer].join(' ')}>
                    <div className={globalClasses.Container}>
                        <header className={classes.PaymentHeader}>
                            <h1>Checkout</h1>
                            <p className={classes.Amount}>Amount: <span>${totalPrice}</span></p>
                        </header>
                        {/* Form */}
                        <StripeProvider apiKey="pk_test_0zXkNCQI8FEFMtDQNxVAFq5u00JYn02HhN">
                            <Elements>
                                <PaymentForm totalPrice={totalPrice} addMsg={this.props.onAddMsg} />
                            </Elements>
                        </StripeProvider>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        cart: state.cart,
    }
}


const mapDispatchToProps = dispatch => {
    return {
        onAddMsg: (msg, type, link) => dispatch(orderActions.addMsg(msg, type, link))
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(Payment);