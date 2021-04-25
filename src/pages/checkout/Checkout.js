import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {LeftCheckout} from './LeftCheckout';
import {RightCheckout} from './RightCheckout';
import {activePage} from '../../actions';
const Checkout = (props) => {
    const [checkOut, setCheckout] = useState(false);
    useEffect(() => {       
    props.dispatch(activePage('/checkout'));
    }, [])
    const checkOutClicked = () => {
        console.log("clicked main component ",checkOut)
        setCheckout(!checkOut)
    }
    return ( <div class="cart-table-area section-padding-100">
    <div class="container-fluid">
        <div class="row">
            <LeftCheckout cartItem={props.cartItem}  checkOut={checkOut}/>
            <RightCheckout cartItem={props.cartItem} checkoutClicked={checkOutClicked}/>
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
export default connect(storeToProp, null)(Checkout);