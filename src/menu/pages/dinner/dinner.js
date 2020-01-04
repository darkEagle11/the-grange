import React, { Component } from 'react';
import MenuLayout from '../../components/menuLayout/menuLayout';

class Dinner extends Component {
    state = {
        items: [
            {
                name: "SPICY SEAFOOD PASTA",
                price: 12,
                descrip: "Exotic food that will make you drown in spices"
            },
            {
                name: "SALMON BURGER",
                price: 6,
                descrip: "Boi, do people love their burgers"
            },
            {
                name: "HOUSEMADE CHOCOLATE CHIP BREAD PUDDING",
                price: 4,
                descrip: "Pretty sure the name says it all"
            },
            {
                name: "Cheesecake",
                price: 4.5,
                descrip: "Who doesn't love cheesecake"
            },



        ]
    }
    render() {
        return (
            <MenuLayout items={this.state.items} pageName="Dinner" pageDescrip="5PM - 10PM" />
        )
    }
}

export default Dinner;