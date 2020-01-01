import React, { Component } from 'react';
import MenuLayout from '../../components/menuLayout/menuLayout';

class Lunch extends Component {
    state = {
        items: [
            { name: "BAKED HAM", price: 4 },
            { name: "CORN MEAL DUSTED CATFISH FRIED TO GOLDEN PERFECTION", price: 24.95, descrip: "A delicate meal with a lot of love and catfish covered in butter" },
            { name: "Chopped Cheese", price: 6, descrip: "For those who keep it real" }
        ]
    }
    render() {
        return (
            <MenuLayout items={this.state.items} pageName="Lunch" pageDescrip="11AM - 5PM" />
        )
    }
}

export default Lunch;