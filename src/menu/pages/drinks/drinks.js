import React, { Component } from 'react';
import MenuLayout from '../../components/menuLayout/menuLayout';

class Drinks extends Component {
    state = {
        items: [
            { name: "Sprite", price: 1 },
            { name: "Pina Calata", price: 5, descrip: "Smooth coconut that feel like creamy heaven on your tongue" },
            { name: "Coco cola", price: 1 }

        ]

    }
    render() {
        return (
            <MenuLayout items={this.state.items} pageName="Drinks" pageDescrip="Served mostly through 11AM - 10PM" />
        )
    }
}

export default Drinks;