import React, { Component } from 'react';
import { CardElement, injectStripe } from 'react-stripe-elements';
import { Redirect } from 'react-router-dom';

import { createInputConfig, fieldsetInputChanged } from '../../../shared/util/input';
import Fieldset from '../../../shared/UI/Fieldset/Fieldset';
import classes from './styles/PaymentForm.css';

class PaymentForm extends Component {
    state = {
        paymentForm: {
            name: {
                legend: "Name",
                inputs: {
                    name: createInputConfig({}),
                }
            },

        }
    }
    inputChangedHandler = (value, fieldsetIdentifier, inputIdentifier) => {
        const newForm = fieldsetInputChanged(
            this.state, 'paymentForm', value, fieldsetIdentifier, inputIdentifier)
        this.setState({ paymentForm: newForm })
    }

    render() {
        let redirect = null;
        if (this.props.totalPrice <= 5) {
            this.props.addMsg('Cart must be worth more than $5', 'error', '/cart')
            redirect = <Redirect to="/cart" />
        }
        const paymentForm = { ...this.state.paymentForm };
        const formElementsArray = [];

        for (let key in paymentForm) {
            const inputsArray = [];
            const fieldsetInputs = paymentForm[key].inputs;
            for (let input in fieldsetInputs) {
                inputsArray.push({
                    id: input,
                    config: fieldsetInputs[input]
                })
            }
            formElementsArray.push({
                fieldsetId: key,
                inputs: inputsArray,
                inputGroupClass: paymentForm[key].inputGroupClass,
                legend: paymentForm[key].legend,
            })
        }
        return (
            <div className={classes.PaymentForm}>
                {formElementsArray.map(formElement => {
                    return <Fieldset
                        key={formElement.fieldsetId}
                        fieldsetId={formElement.fieldsetId}
                        inputs={formElement.inputs}
                        inputGroupClass={formElement.inputGroupClass}
                        legend={formElement.legend}
                        inputChange={this.inputChangedHandler}
                    />
                })}
                <div className={classes.CardElmtContainer}>
                    <label>Credit/Debit Card</label>
                    <div className={classes.CardElmt}>
                        <CardElement />
                    </div>
                    <button className={classes.SubmitBtn}>Sumbit</button>
                    {redirect}
                </div>
            </div>
        )
    }
}

export default injectStripe(PaymentForm);