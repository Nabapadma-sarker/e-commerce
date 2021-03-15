import {ADD_TO_CART,ADD_TO_CART_Q,REMOVE_FROM_CART,ACTIVE_PAGE,CART_INCREMENT,CART_DECREMENT} from '../actions';

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
            console.log('reducer ',action);
            console.log('reducer ',action.payload);

            itemInCart = allcart.findIndex((product)=>{
                 return product.id === action.payload.id;
            });
            // itemId = allProducts.findIndex((product)=>{
            //      return product.id === action.payload;
            // });
            if (itemInCart < 0) {
                allcart.push(action.payload);
                console.log(allcart)
                allcart[allcart.length-1].quantity = 1;
            }
            else {
                allcart[itemInCart].quantity += 1;            
            }
            // allProducts[itemId].addToCart = true;
            return {...state, cart: allcart, products: allProducts};
        case ADD_TO_CART_Q:
            allcart = [...state.cart];
            allProducts = [...state.products];
            console.log('reducer ',action);
            console.log('reducer ',action.payload);

            itemInCart = allcart.findIndex((product)=>{
                 return product.id === action.payload.productDetail.id;
            });
            if (itemInCart < 0) {
                allcart.push(action.payload.productDetail);
                console.log(allcart)
                allcart[allcart.length-1].quantity = action.payload.itemCart;
            }
            else {
                allcart[itemInCart].quantity = action.payload.itemCart;            
            }
            return {...state, cart: allcart, products: allProducts};
        case REMOVE_FROM_CART:
            allcart = [...state.cart];
            allProducts = [...state.products];
            console.log(action.payload);

            itemInCart = allcart.findIndex((product)=>{
                 return product.id === action.payload.id;
            });
            allcart.splice(itemInCart,1);
            return {...state, cart: allcart, products: allProducts};
        case CART_INCREMENT:
            allcart = [...state.cart];
            // itemId = state.products.findIndex((product)=>{
            //     return product.id === action.payload;
            // });
            itemInCart = allcart.findIndex((product)=>{
                return product.id === action.payload;
            });
            // console.log('ic',state.products[itemId].quantity);
            // if (allcart[itemInCart].quantity < state.products[itemId].quantity) {
                allcart[itemInCart].quantity++;
                return {...state, cart: allcart};                
            // }
            // else{
            //     return {...state}
            // }
        case CART_DECREMENT:
            allcart = [...state.cart];
            itemInCart = allcart.findIndex((product)=>{
                return product.id === action.payload;
            });
            // if (allcart[itemInCart].quantity > 1) {
                allcart[itemInCart].quantity--;
                return {...state, cart: allcart};                
            // }
            // else{
            //     itemId = state.products.findIndex((product)=>{
            //         return product.id === action.payload;
            //     });
            //     state.products[itemId].addToCart = false;
            //     let refreshCart = allcart.filter((product)=>{
            //         return product.id != action.payload;
            //     });
            //     return {...state, cart: refreshCart}
            // }
        case ACTIVE_PAGE:
            let url = {
                activeMenu: action.payload
            };
            return {...state, header: url};
        default:
            return state;
    }
    
}