export const ADD_TO_CART = 'ADD_TO_CART';
export const ACTIVE_PAGE = 'ACTIVE_PAGE';
export const addToCart = (item)=>{
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