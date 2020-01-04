import React, { Component } from 'react';
import MenuLayout from '../../components/menuLayout/menuLayout';

class Drinks extends Component {
    state = {
        items: [
            {
                name: "RED STRIPE JAMAICAN LAGER",
                price: 7,
            },
            {
                name: "Milkshakes",
                price: 5,
            },
            {
                name: "Sprite",
                price: 1.5,
            },
            {
                name: "Pina Colata",
                price: 3,
            },
            {
                name: "Orange Juice",
                price: 3,
            },
            {
                name: "Bingo suprise",
                price: 2,
            },

        ]
    }
    render() {
        return (
            <MenuLayout items={this.state.items} pageName="Drinks" pageDescrip="Served mostly through 11AM - 10PM" />
        )
    }
}

export default Drinks;