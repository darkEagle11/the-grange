import React, { Fragment, useEffect } from 'react';
import classes from './styles/Modal.css'
import Backdrop from '../Backdrop/Backdrop';

const modal = props => {
    useEffect(() => {
        const body = document.querySelector('body');
        if (props.show) {
            body.classList.add(classes.ModalOpen)
        }
    })
    useEffect(() => {
        const body = document.querySelector('body');
        return () => {
            body.classList.remove(classes.ModalOpen)
        }
    }, []);
    let modalClasses = [classes.Modal, props.modalStyles]
    let closeClasses = ["material-icons", classes.Close]
    if (props.show) {
        modalClasses.push(classes.ShowModal)
    }
    const backdropClick = props.onlyModalClick ? null : props.click;
    return (
        <Fragment>
            <Backdrop show={props.show} click={backdropClick} styles={classes.Backdrop}>
                <div className={modalClasses.join(' ')}>
                    <i onClick={props.click} className={closeClasses.join(' ')}>close</i>
                    <h3 className={classes.ModalHeader}>{props.title}</h3>
                    <p className={classes.Price}>${props.price}</p>
                    {props.children}
                </div>
            </Backdrop>
        </Fragment>
    )
}

export default modal;