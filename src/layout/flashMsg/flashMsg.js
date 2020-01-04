import React from 'react';
import classes from './styles/flashMsg.css';
import { withRouter } from 'react-router-dom';

const flashMsg = props => {
    const flashMsgClasses = [classes.FlashMsgContainer];
    if (!props.show) {
        flashMsgClasses.push(classes.Hide)
    }
    if (props.type === 'error') {
        flashMsgClasses.push(classes.Error)
    }
    const flashMsgFunc = () => {
        props.history.push(props.link)
        props.removeMsg()
    }
    return (
        <div onClick={flashMsgFunc} className={flashMsgClasses.join(' ')}>
            <p className={classes.Msg}>{props.msg}</p>
            <i
                className={["material-icons", classes.Close].join(' ')}
                onClick={props.removeMsg}>close</i>
        </div>
    )
}

export default withRouter(flashMsg);