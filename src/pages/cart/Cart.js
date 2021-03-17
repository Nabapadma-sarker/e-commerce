import React, { useEffect } from 'react';
import {connect} from 'react-redux';
import LeftCart from './LeftCart/LeftCart';
import {RightCart} from './RightCart/RightCart';
import {activePage} from '../../actions';

const Cart = (props) => {
    useEffect(() => {       
    props.dispatch(activePage('/cart'));
    }, [])
    return ( <div class="cart-table-area section-padding-100">
    <div class="container-fluid">
        <div class="row">
            <LeftCart cartItem={props.cartItem}/>
            <RightCart cartItem={props.cartItem}/>
        </div>
    </div>
</div> );
}

const storeToProp = state=>{
    console.log(state);
    return {
        cartItem: state.cart,
    }
}
export default connect(storeToProp, null)(Cart);