import React, { Component } from 'react';
import classes from './styles/reserve.css';

import globalClasses from '../../../shared/styles/globalClasses/globalClasses.css';
import ReserveForm from '../../components/reserveForm/reserveForm';

class Reserve extends Component {
    render() {

        return (
            <div className={[classes.ReserveContainer, globalClasses.Container].join(' ')}>
                <header className={classes.Header}>
                    <h2>Rerservations</h2>
                    <p>Don't like waiting in line, just reserve the time that will fit you best.The typical wait is between 2-3 business days and tell if you're eligble for desired time.</p>
                </header>
                <ReserveForm />
            </div>

        )
    }
}


export default Reserve;