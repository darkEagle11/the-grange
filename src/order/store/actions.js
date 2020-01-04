import * as actionTypes from './actionTypes';

export const openModal = (name, price) => {
    return {
        type: actionTypes.OPEN_MODAL,
        name: name,
        price: price
    }
}

export const closeModal = () => {
    return {
        type: actionTypes.CLOSE_MODAL,
    }
}

export const addToCart = (name, price, quantity, specialRequest) => {
    return {
        type: actionTypes.ADD_TO_CART,
        name: name,
        price: price,
        quantity: quantity,
        specialRequest: specialRequest
    }
}

export const deleteItemFromCart = (index) => {
    return {
        type: actionTypes.DELETE_FROM_CART,
        index: index,
    }
}

export const removeMsg = () => {
    return {
        type: actionTypes.REMOVE_MSG
    }
}

export const addMsg = (msg, type, link) => {
    return {
        type: actionTypes.ADD_MSG,
        msg: msg,
        msgType: type,
        link: link
    }
}