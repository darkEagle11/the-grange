import React, { Component } from 'react';
import MenuLayout from '../../components/menuLayout/menuLayout';

class Lunch extends Component {
    state = {
        items: [
            {
                name: "Chopped Cheese",
                price: 6,
                descrip: "For the real new yorkers"
            },
            {
                name: "SHRIMP & PARMESAN GRITS with scrambled eggs",
                price: 13.93,
                descrip: "Join a delicious shrimp with parmesan flavoring"
            },
            {
                name: "Chicken over rice",
                price: 7,
                descrip: "Halal food that will make you rethink your food truck"
            },
            {
                name: "CURRIED CHICKEN SALAD SANDWICH",
                price: 9,
                descrip: "An authenicate recipe from Jamica that will change your definition of chicken salad sanwhiches"
            },
            {
                name: "GRANOLA & YOGURT OR FRUIT BOWL",
                price: 9,
                descrip: "Need an boost for your day, we got you covered with a healthy alternative to coffee"
            },
            {
                name: "The steak burger",
                price: 10.92,
                descrip: "If your're up to challange, the steak burger is here waiting for its next opponent"
            },


        ]
    }
    render() {
        return (
            <MenuLayout items={this.state.items} pageName="Lunch" pageDescrip="11AM - 5PM" />
        )
    }
}

export default Lunch;