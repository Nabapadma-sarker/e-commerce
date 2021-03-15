import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {addCart, removeCart, cartIncrement, cartDecrement, addCartQuantity} from '../../actions';

const AddToCart = (props) => {
    console.log('add to cart',props)
    const [adtocart, setAdtocart] = useState(false)
    const [itemCart, setItemCart] = useState(1)
    const addRemoveCart =()=>{
        if(props.productDetail && props.productDetail.addToCart){
            props.dispatch(removeCart(props.productDetail));
            setAdtocart(false)
        }
        else{
            props.dispatch(addCartQuantity({"productDetail": props.productDetail, itemCart}));
            setAdtocart(true)
        }
    }
    const cartPlus = ()=>{
        // props.dispatch(cartIncrement(props.productDetail.id));
        if(itemCart < props.productDetail.remainQuantity){
            setItemCart(itemCart+1)
        }
    }
    const cartMinus = ()=>{
        // props.dispatch(cartDecrement(props.productDetail.id));
        if(itemCart > 1){
            setItemCart(itemCart-1)
        }
    }
    // useEffect(()=>{
    //     if(props.productDetail.remainQuantity > 0){
    //         setItemCart(1)
    //     }
    // },[])

    return ( 
        <form class="cart clearfix" method="post">
            <div class="cart-btn d-flex mb-50">
                <p>Qty</p>
                <div class="quantity">
                    <span class="qty-minus" onClick={(e)=>cartMinus()}><i class="fa fa-caret-down" aria-hidden="true"></i></span>
                    <input type="number" class="qty-text" id="qty" step="1" min="1" max={props.productDetail.remainQuantity} name="quantity" value={itemCart}/>
                    <span class="qty-plus" onClick={(e)=> cartPlus()}><i class="fa fa-caret-up" aria-hidden="true"></i></span>
                </div>
            </div>
            <button name="addtocart" value="5" class="btn amado-btn" disabled={(props.productDetail && props.productDetail.addToCart) || adtocart} onClick={(e)=>{ e.preventDefault(); addRemoveCart();} }>{(props.productDetail && props.productDetail.addToCart) || adtocart? "Added to cart" : "Add to cart"}</button>
        </form> );
}

const storeToProp = (state)=>{
    return {
        cartItems: state.cart
    }
} 
export default connect(storeToProp, null)(AddToCart);