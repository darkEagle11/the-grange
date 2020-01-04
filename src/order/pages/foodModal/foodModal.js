import React, { Component } from 'react';
import { connect } from 'react-redux';

import classes from './styles/foodModal.css';
import Modal from '../../../shared/UI/Modal/Modal';
import * as orderActions from '../../store/actions';

const initialState = {
    quantity: 1,
    specialRequest: '',
}
class FoodModal extends Component {

    state = {
        ...initialState
    }

    storeInput = (value, inputIdentifer) => {
        this.setState({
            [inputIdentifer]: value,
        })
    }
    increaseQuantity = () => {
        this.setState((prevState, props) => {
            return {
                quantity: prevState.quantity + 1,
            }
        })
    }
    lowerQuantity = () => {
        if (this.state.quantity <= 1) {
            return null;
        }
        this.setState((prevState, props) => {
            return {
                quantity: prevState.quantity - 1,
            }
        })
    }
    render() {
        let modal = null;
        const closeModalFuncs = () => {
            this.setState({ ...initialState })
            this.props.addItemToCart(
                this.props.currentModal.name,
                this.props.currentModal.price,
                this.state.quantity,
                this.state.specialRequest
            );
            this.props.onCloseModal()
            this.props.addMsg('Item was added to cart', 'success');
        }

        if (this.props.currentModal) {
            modal = (
                <Modal
                    show
                    title={this.props.currentModal.name}
                    price={this.props.currentModal.price}
                    click={this.props.onCloseModal}
                    onlyModalClick >
                    <div className={classes.QuantityContainer}>
                        <p>Quantity</p>
                        <div className={classes.QuantityControl}>
                            <button className={classes.QuantityBtn} onClick={() => this.lowerQuantity()}>-</button>
                            <span>{this.state.quantity}</span>
                            <button className={classes.QuantityBtn} onClick={() => this.increaseQuantity()}>+</button>
                        </div>
                    </div>

                    <label className={classes.Label}>Special Request</label>
                    <textarea className={classes.Textarea} value={this.state.specialRequest} onChange={(e) => this.storeInput(e.target.value, "specialRequest")}></textarea>

                    <button
                        className={classes.CartBtn}
                        onClick={closeModalFuncs}>Add To Cart</button>
                </Modal >
            )
        }
        return modal;
    }
}

const mapStateToProps = state => {
    return {
        openModal: state.openModal,
        currentModal: state.currentModal,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onCloseModal: () => dispatch(orderActions.closeModal()),
        addMsg: (msg, type) => dispatch(orderActions.addMsg(msg, type)),
        addItemToCart: (name, price, quantity, specialRequest) => dispatch(orderActions.addToCart(name, price, quantity, specialRequest))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FoodModal);