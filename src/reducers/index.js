import {ADD_TO_CART,ACTIVE_PAGE} from '../actions';

import {shopPageData} from "../data/shopPageData";

const initialState = {
    header: {activeMenu : '/'},
    products: shopPageData,
    cart: []
};
export const rootReducer = (state = initialState, action)=>{
    // console.log(state,action);
    switch (action.type) {
        case ADD_TO_CART:
            let allcart = [...state.cart];
            console.log(action.payload);

            let itemInCart = allcart.findIndex((product)=>{
                 return product.id === action.payload;
            });
            let itemId = state.products.findIndex((product)=>{
                 return product.id === action.payload;
            });
            if (itemInCart < 0) {
                allcart.push(state.products[itemId]);
            }
            state.products[itemId].addToCart = true;
            console.log(allcart);
            console.log(state.products);
            return {...state, cart: allcart};
        case ACTIVE_PAGE:
            let url = {
                activeMenu: action.payload
            };
            return {...state, header: url};
        default:
            return state;
    }
    
}