import React from 'react';
import NavigationItem from './navigationItem/navigationItem'

const navigationItems = props => {
    return (
        <React.Fragment>
            <a
                className={[props.navbrandStyle, props.navItemStyle].join(' ')}
                onClick={props.click}>The Grange</a>

            <div className={props.webpageLinksStyle}>
                <div className={[props.navItemStyle, props.dropDownStyle].join(' ')}>
                    <button className={props.dropDownBtnStyle}>Menu</button>
                    <div className={props.dropDownLinks}>
                        <NavigationItem
                            link="/menu/breakfast"
                            className={props.dropDownItem}
                            onClick={props.click}>Breakfast</NavigationItem>
                        <NavigationItem
                            link="/menu/lunch"
                            className={props.dropDownItem}
                            onClick={props.click}>Lunch</NavigationItem>
                        <NavigationItem
                            link="/menu/dinner"
                            className={props.dropDownItem}
                            onClick={props.click}>Dinner</NavigationItem>
                        <NavigationItem
                            link="/menu/drinks"
                            className={props.dropDownItem}
                            onClick={props.click}>Drinks</NavigationItem>
                    </div>
                </div>

                <NavigationItem
                    link="/cart"
                    className={props.navItemStyle}
                    onClick={props.click}>Cart</NavigationItem>
                <NavigationItem
                    link="/reserve"
                    className={props.navItemStyle}
                    onClick={props.click}>Reserve</NavigationItem>
            </div>
        </React.Fragment>
    )
}

export default navigationItems;