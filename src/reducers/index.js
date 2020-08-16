import {ADD_TO_CART,ACTIVE_PAGE,CART_INCREMENT,CART_DECREMENT} from '../actions';

import {shopPageData} from "../data/shopPageData";

const initialState = {
    header: {activeMenu : '/'},
    products: shopPageData,
    cart: []
};
export const rootReducer = (state = initialState, action)=>{
    // console.log(state,action);
    let allcart;
    let allProducts;
    let itemInCart;
    let itemId;
    switch (action.type) {
        case ADD_TO_CART:
            allcart = [...state.cart];
            allProducts = [...state.products];
            console.log(action.payload);

            itemInCart = allcart.findIndex((product)=>{
                 return product.id === action.payload;
            });
            itemId = allProducts.findIndex((product)=>{
                 return product.id === action.payload;
            });
            if (itemInCart < 0) {
                let newProduct = {
                    ...allProducts[itemId]
                }
                allcart.push(newProduct);
                allcart[allcart.length-1].quantity = 1;
            }
            allProducts[itemId].addToCart = true;
            return {...state, cart: allcart, products: allProducts};
        case CART_INCREMENT:
            allcart = [...state.cart];
            itemId = state.products.findIndex((product)=>{
                return product.id === action.payload;
            });
            itemInCart = allcart.findIndex((product)=>{
                return product.id === action.payload;
            });
            console.log('ic',state.products[itemId].quantity);
            if (allcart[itemInCart].quantity < state.products[itemId].quantity) {
                allcart[itemInCart].quantity++;
                return {...state, cart: allcart};                
            }
            else{
                return {...state}
            }
        case CART_DECREMENT:
            allcart = [...state.cart];
            itemInCart = allcart.findIndex((product)=>{
                return product.id === action.payload;
            });
            if (allcart[itemInCart].quantity > 1) {
                allcart[itemInCart].quantity--;
                return {...state, cart: allcart};                
            }
            else{
                itemId = state.products.findIndex((product)=>{
                    return product.id === action.payload;
                });
                state.products[itemId].addToCart = false;
                let refreshCart = allcart.filter((product)=>{
                    return product.id != action.payload;
                });
                return {...state, cart: refreshCart}
            }
        case ACTIVE_PAGE:
            let url = {
                activeMenu: action.payload
            };
            return {...state, header: url};
        default:
            return state;
    }
    
}