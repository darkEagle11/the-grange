import React from 'react';
import classes from './styles/menuItem.css';
import { connect } from 'react-redux';
import * as orderActions from '../../../order/store/actions';

const menuItem = props => {
    const menuItemClasses = [classes.MenuItem];
    let price = props.price;
    let name = props.name;
    let descrip = props.descrip;
    let button = <button
        className={classes.ItemOrderBtn}
        onClick={() => props.onOpenModal(props.name, props.price)}>
        Order Now</button>;

    const removeItemFunc = () => {
        props.onDeleteItem(props.index)
        props.addMsg('Item was deleted', 'error');
    }

    if (props.orderItem) {
        menuItemClasses.push(classes.OrderItem)
        price = +props.price * +props.quantity;
        name = `${props.quantity} X ${props.name}`;
        descrip = `Single Item: $${props.price}`
        button = <button
            onClick={removeItemFunc}
            className={classes.ItemDeleteBtn}>Delete Item</button>
    }

    return (
        <div className={menuItemClasses.join(' ')}>
            <div className={classes.ItemInfo}>
                <p className={classes.ItemHeader}>{name}</p>
                <p className={classes.ItemDescrip}>{descrip}</p>
            </div>
            <div className={classes.ItemPurchase}>
                <p className={classes.ItemPrice}>${price.toFixed(2)}</p>
                {button}
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        onOpenModal: (name, price) => dispatch(orderActions.openModal(name, price)),
        onDeleteItem: (index) => dispatch(orderActions.deleteItemFromCart(index)),
        addMsg: (msg, type) => dispatch(orderActions.addMsg(msg, type))
    }
}
export default connect(null, mapDispatchToProps)(menuItem);