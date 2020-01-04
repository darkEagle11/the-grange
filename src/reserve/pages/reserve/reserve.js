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
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut lectus ut ligula tristique lobortis. Suspendisse in venenatis odio, ut malesuada est. Pellentesque convallis erat diam, eget fringilla nisi aliquam.</p>
                </header>
                <ReserveForm />
            </div>

        )
    }
}


export default Reserve;