import React from 'react';
import classes from './styles/menu.css';
import cutterHexagon from '../../../assets/cutter-hexagon.svg';
import fullHexagon from '../../../assets/full-hexagon.svg';
import { withRouter } from 'react-router-dom';

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
        <React.Fragment>
            <div className={menuClasses.join(' ')} onClick={() => props.history.push(props.menuPath)}>
                <div className={menuContentClasses.join(' ')}>
                    <h3>{props.name}</h3>
                    <div className={classes.Overlay}></div>
                    {props.bgImg ? <img className={classes.backgroundImage} src={props.bgImg} alt="" /> : null}
                </div>
                <img className={classes.CutterHexagon} src={cutterHexagon} alt="" />
            </div>

            <div className={classes.SingleMenuMed} onClick={() => props.history.push(props.menuPath)}>
                <h2>{props.name}</h2>
                <img className={classes.FullHexImg} src={fullHexagon} alt="" />
            </div>
        </React.Fragment>
    )
};

export default withRouter(menu);