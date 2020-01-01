import React, { Component } from 'react';
import MenuLayout from '../../components/menuLayout/menuLayout';

class Breakfast extends Component {
    state = {
        items: [
            { name: "Pancakes", price: 10, descrip: "" },
            { name: "Donuts", price: 2, descrip: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." }
        ]
    }
    render() {
        return (
            <MenuLayout items={this.state.items} pageName="Breakfast" pageDescrip="8AM - 11AM" />
        )
    }
}

export default Breakfast;