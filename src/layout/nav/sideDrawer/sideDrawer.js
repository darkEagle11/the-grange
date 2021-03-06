import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';

import classes from './styles/sideDrawer.css';
import menubox from '../../../assets/menubox.svg';
import cartbox from '../../../assets/cartbox.svg';
import Backdrop from '../../../shared/UI/Backdrop/Backdrop';
import NavigationItems from '../navigationItems/navigationItems';

const sideDrawer = props => {
    const [showDrawerState, setShowDrawerState] = useState(false)
    return (
        <React.Fragment>
            <nav className={classes.Navbar}>
                <div className={classes.MenuBox} onClick={() => setShowDrawerState(true)}>
                    <img className={classes.MenuBoxImg} src={menubox} alt="" />
                    <i className={["material-icons", classes.MenuIcon].join(' ')}>menu</i>
                </div>

                <div className={classes.CartBox} onClick={() => props.history.push('/cart')}>
                    <img className={classes.CartBoxImg} src={cartbox} alt="" />
                    <i className={["material-icons", classes.CartIcon].join(" ")}>shopping_cart</i>
                </div>
            </nav>

            <Backdrop show={showDrawerState} styles={classes.Backdrop}>
                <div className={classes.SideDrawer}>
                    <i
                        className={["material-icons", classes.CloseDrawer].join(' ')}
                        onClick={() => setShowDrawerState(false)}>close</i>
                    <NavigationItems
                        navItemStyle={classes.NavItem}
                        navbrandStyle={classes.NavBrand}
                        webpageLinksStyle={classes.WebpageLinks}
                        dropDownStyle={classes.DropDownContainer}
                        dropDownBtnStyle={classes.DropDownBtn}
                        dropDownLinks={classes.DropDownLinks}
                        click={() => setShowDrawerState(false)} />
                </div>
            </Backdrop>


        </React.Fragment >
    );
}

export default withRouter(sideDrawer);