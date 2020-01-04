import React from 'react';
import { connect } from 'react-redux';

import Nav from './nav/nav';
import Footer from './footer/footer';
import FlashMsg from './flashMsg/flashMsg';
import * as orderActions from '../order/store/actions';

const layout = props => {
    const flashMsg = props.msg ? <FlashMsg
        show
        msg={props.msg.text}
        removeMsg={props.onRemoveMsg}
        type={props.msg.type}
        link={props.msg.link} /> : null;
    return (
        <React.Fragment>
            {flashMsg}
            <Nav />
            {props.children}
            <Footer />
        </React.Fragment>
    )
}

const mapStateToProps = state => {
    return {
        msg: state.msg,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onRemoveMsg: () => dispatch(orderActions.removeMsg())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(layout);