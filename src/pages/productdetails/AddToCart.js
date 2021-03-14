import React, {useState} from 'react';
import {connect} from 'react-redux';
import {addCart, removeCart} from '../../actions';

const AddToCart = (props) => {
    console.log('add to cart',props)
    const [adtocart, setAdtocart] = useState(false)
    const addRemoveCart =()=>{
        if(props.productDetail && props.productDetail.addToCart){
            props.dispatch(removeCart(props.productDetail));
            setAdtocart(false)
        }
        else{
            props.dispatch(addCart(props.productDetail));
            setAdtocart(true)
        }
    }
    return ( 
        <form class="cart clearfix" method="post">
            <div class="cart-btn d-flex mb-50">
                <p>Qty</p>
                <div class="quantity">
                    <span class="qty-minus" onclick="var effect = document.getElementById('qty'); var qty = effect.value; if( !isNaN( qty ) &amp;&amp; qty &gt; 1 ) effect.value--;return false;"><i class="fa fa-caret-down" aria-hidden="true"></i></span>
                    <input type="number" class="qty-text" id="qty" step="1" min="1" max="300" name="quantity" value="1"/>
                    <span class="qty-plus" onclick="var effect = document.getElementById('qty'); var qty = effect.value; if( !isNaN( qty )) effect.value++;return false;"><i class="fa fa-caret-up" aria-hidden="true"></i></span>
                </div>
            </div>
            <button name="addtocart" value="5" class="btn amado-btn" disabled={(props.productDetail && props.productDetail.addToCart) || adtocart} onClick={(e)=>{ e.preventDefault(); addRemoveCart();} }>{(props.productDetail && props.productDetail.addToCart) || adtocart? "Added to cart" : "Add to cart"}</button>
        </form> );
}
export default connect()(AddToCart);