import * as actionTypes from './actionTypes';
import { updatedObj } from '../../shared/util/updatedObj';

const initialState = {
    openModal: false,
    currentModal: null,
    msg: null,
    cart: [
        { name: "Fried Chicken", price: 13, specialRequest: '', quantity: 2 }
    ]
}

const openModal = (state, action) => {
    return updatedObj(state, {
        openModal: true,
        currentModal: {
            name: action.name,
            price: action.price,
        }
    })
}

const closeModal = (state, action) => {
    return updatedObj(state, {
        openModal: false,
        currentModal: null,
    })
}

const addToCart = (state, action) => {
    return updatedObj(state, {
        cart: state.cart.concat({
            name: action.name,
            price: action.price,
            specialRequest: action.specialRequest,
            quantity: action.quantity
        }),
        msg: 'Item was added to cart'
    })
}
const addMsg = (state, action) => {
    return updatedObj(state, {
        msg: {
            text: action.msg,
            type: action.msgType,
        }
    })
}
const removeMsg = (state, action) => {
    return updatedObj(state, {
        msg: null
    })
}

const deleteItemFromCart = (state, action) => {
    return updatedObj(state, {
        cart: state.cart.filter((item, index) => {
            return index !== action.index;
        })
    })
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case (actionTypes.OPEN_MODAL): return openModal(state, action)
        case (actionTypes.CLOSE_MODAL): return closeModal(state, action)
        case (actionTypes.ADD_TO_CART): return addToCart(state, action)
        case (actionTypes.DELETE_FROM_CART): return deleteItemFromCart(state, action)
        case (actionTypes.REMOVE_MSG): return removeMsg(state, action)
        case (actionTypes.ADD_MSG): return addMsg(state, action)
        default:
            return state;
    }
}

export default reducer;