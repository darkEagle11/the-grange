import React, { Component } from 'react';
import MenuLayout from '../../components/menuLayout/menuLayout';

class Dinner extends Component {
    state = {
        items: [
            { name: "SHORT RIBS OF BEEF", price: 28.95, descrip: "Prepared in Sylvia’s Secret Brown Gravy" },
            { name: "down home fried or smoothered chicken and waffle", price: 17.95, descrip: "Blow them taste buds off" }
        ]
    }
    render() {
        return (
            <MenuLayout items={this.state.items} pageName="Dinner" pageDescrip="5PM - 10PM" />
        )
    }
}

export default Dinner;