import React from 'react';
import {LeftCheckout} from './LeftCheckout';
import {RightCheckout} from './RightCheckout';
const Checkout = () => {
    return ( <div class="cart-table-area section-padding-100">
    <div class="container-fluid">
        <div class="row">
            <LeftCheckout/>
            <RightCheckout/>
        </div>
    </div>
</div> );
}
 
export default Checkout;