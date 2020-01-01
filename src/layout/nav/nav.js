import React from 'react';
import SideDrawer from './sideDrawer/sideDrawer';
import Navbar from './navbar/navbar';

const nav = props => {
    return (
        <React.Fragment>
            <SideDrawer />
            <Navbar />
        </React.Fragment>
    )
}

export default nav;