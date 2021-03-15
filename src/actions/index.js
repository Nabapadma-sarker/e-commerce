export const ADD_TO_CART = 'ADD_TO_CART';
export const ADD_TO_CART_Q = 'ADD_TO_CART_Q';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const ACTIVE_PAGE = 'ACTIVE_PAGE';
export const CART_INCREMENT = 'CART_INCREMENT';
export const CART_DECREMENT = 'CART_DECREMENT';
export const addCart = (item)=>{
    return {
        type: ADD_TO_CART,
        payload: item
    }
}
export const addCartQuantity = (item)=>{
    return {
        type: ADD_TO_CART_Q,
        payload: item
    }
}
export const removeCart = (item)=>{
    return {
        type: REMOVE_FROM_CART,
        payload: item
    }
}
export const activePage = (url)=>{
    return {
        type: ACTIVE_PAGE,
        payload: url
    }
}
export const cartIncrement = (id)=>{
    return {
        type: CART_INCREMENT,
        payload: id
    }
}
export const cartDecrement = (id)=>{
    return {
        type: CART_DECREMENT,
        payload: id
    }
}