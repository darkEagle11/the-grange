import React from 'react';
import { NavLink } from 'react-router-dom';

const navigationItem = props => {
    return (
        <NavLink
            to={props.link}
            className={props.className}
            exact={props.exact}
            activeClassName={props.activeClass}
            onClick={props.onClick}>
            {props.children}
        </NavLink>
    )
}

export default navigationItem;