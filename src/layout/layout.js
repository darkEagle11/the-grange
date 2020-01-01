import React from 'react';
import Nav from './nav/nav';
import Footer from './footer/footer';

const layout = props => {
    return (
        <React.Fragment>
            <Nav />
            {props.children}
            <Footer />
        </React.Fragment>
    )
}

export default layout;