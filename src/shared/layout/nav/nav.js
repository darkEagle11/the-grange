import React from 'react';
import classes from './styles/nav.css';

import menubox from '../../../assets/menubox.svg';
import cartbox from '../../../assets/cartbox.svg';
const nav = props => {
    return (
        <nav className={classes.Navbar}>
            <div className={classes.MenuBox}>
                <img className={classes.MenuBoxImg} src={menubox} alt="" />
                <i className={["material-icons", classes.MenuIcon].join(' ')}>menu</i>
            </div>

            <div className={classes.CartBox}>
                <img className={classes.CartBoxImg} src={cartbox} alt="" />
                <i className={["material-icons", classes.CartIcon].join(" ")}>shopping_cart</i>
            </div>
        </nav>
    )
}

export default nav;