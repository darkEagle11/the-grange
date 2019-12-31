import React from 'react';
import classes from './styles/menu.css';
import cutterHexagon from '../../../assets/cutter-hexagon.svg';

const menu = props => {
    const menuClasses = [classes.SingleMenu];
    const menuContentClasses = [props.menuStyles, classes.Content]
    if (!props.bgImg) {
        menuContentClasses.push(classes.DefaultMenuStyles)
    }
    if (props.reverse) {
        menuClasses.push(classes.SingleMenuReverse)
    }
    return (
        <div className={menuClasses.join(' ')}>
            <div className={menuContentClasses.join(' ')}>
                <h3>{props.name}</h3>
                <div className={classes.Overlay}></div>
                {props.bgImg ? <img className={classes.backgroundImage} src={props.bgImg} alt="" /> : null}
            </div>
            <img className={classes.CutterHexagon} src={cutterHexagon} alt="" />
        </div>
    )
};

export default menu;