import React from 'react';
import classes from './styles/flashMsg.css';

const flashMsg = props => {
    const flashMsgClasses = [classes.FlashMsgContainer];
    if (!props.show) {
        flashMsgClasses.push(classes.Hide)
    }
    if (props.type === 'error') {
        flashMsgClasses.push(classes.Error)
    }
    return (
        <div className={flashMsgClasses.join(' ')}>
            <p className={classes.Msg}>{props.msg}</p>
            <i
                className={["material-icons", classes.Close].join(' ')}
                onClick={props.removeMsg}>close</i>
        </div>
    )
}

export default flashMsg;