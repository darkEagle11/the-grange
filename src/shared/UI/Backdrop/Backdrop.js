import React from 'react';
import classes from './stylesheets/Backdrop.css';
const backdrop = props => {
    let backdrop = null;
    let backdropClasses = [props.styles, classes.Backdrop]
    if (props.show) {
        backdrop = (
            <div className={backdropClasses.join(' ')}>
                {props.children}
            </div>
        )

    }
    return backdrop;


}
export default backdrop;