export const ADD_TO_CART = 'ADD_TO_CART';
export const ACTIVE_PAGE = 'ACTIVE_PAGE';
export const CART_INCREMENT = 'CART_INCREMENT';
export const CART_DECREMENT = 'CART_DECREMENT';
export const addCart = (item)=>{
    return {
        type: ADD_TO_CART,
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