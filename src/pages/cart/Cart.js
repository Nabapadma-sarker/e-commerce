import React from 'react';
import {LeftCart} from './LeftCart';
import {RightCart} from './RightCart';

const Cart = () => {
    return ( <div class="cart-table-area section-padding-100">
    <div class="container-fluid">
        <div class="row">
            <LeftCart/>
            <RightCart/>
        </div>
    </div>
</div> );
}
 
export default Cart;