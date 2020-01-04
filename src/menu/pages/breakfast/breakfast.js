import React, { Component } from 'react';
import MenuLayout from '../../components/menuLayout/menuLayout';

class Breakfast extends Component {
    state = {
        items: [
            {
                name: "Pancakes",
                price: 10,
                descrip: "This will make you feel like you can touch the sky"
            },
            {
                name: "Donuts",
                price: 2,
                descrip: "Who doesn't love donuts"
            },
            {
                name: "Oatmeal",
                price: 3,
                descrip: "Creamy delicious oats with half and half milk and berries"
            },
            {
                name: "Spice Poblano Omelette",
                price: 15.29,
                descrip: "In this spicy omelette, you’ll enjoy fire-roasted Poblano peppers, red bell peppers & onions, shredded beef, Jack & cheddar blend, fresh avocado, Poblano cream and spicy, chopped Serrano peppers. Comin’ in hot!"
            },
            {
                name: "Grilled Chesse Sandwhich",
                price: 4,
                descrip: ""
            },
            {
                name: "French Toats",
                price: 6,
                descrip: "Six fluffy triangle-shaped slices topped with whipped butter and sprinkled with powdered sugar."
            }

        ]
    }
    render() {
        return (
            <MenuLayout items={this.state.items} pageName="Breakfast" pageDescrip="8AM - 11AM" />
        )
    }
}

export default Breakfast;