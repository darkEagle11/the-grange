import React from 'react';
import classes from './styles/navbar.css';
import NavigationItems from '../navigationItems/navigationItems';

const navbar = props => {
    return (
        <nav className={classes.Navbar}>
            <NavigationItems
                navItemStyle={classes.NavItem}
                navbrandStyle={classes.NavBrand}
                webpageLinksStyle={classes.WebpageLinks}
                dropDownStyle={classes.DropDownContainer}
                dropDownBtnStyle={classes.DropDownBtn}
                dropDownLinks={classes.DropDownLinks}
                dropDownItem={classes.DropDownItem} />
        </nav>
    );
}

export default navbar;