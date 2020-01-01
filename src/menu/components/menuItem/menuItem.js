import React from 'react';
import classes from './styles/menuItem.css';

const menuItem = props => {
    return (
        <div className={classes.MenuItem}>
            <div className={classes.ItemInfo}>
                <p className={classes.ItemHeader}>{props.name}</p>
                <p className={classes.ItemDescrip}>{props.descrip}</p>
            </div>
            <div className={classes.ItemPurchase}>
                <p className={classes.ItemPrice}>${props.price}</p>
                <button className={classes.ItemOrderBtn}>Order Now</button>
            </div>
        </div>
    )
}

export default menuItem;