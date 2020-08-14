import React from 'react';

export const RightCart = () => {
    return ( <div class="col-12 col-lg-4">
    <div class="cart-summary">
        <h5>Cart Total</h5>
        <ul class="summary-table">
            <li><span>subtotal:</span> <span>$140.00</span></li>
            <li><span>delivery:</span> <span>Free</span></li>
            <li><span>total:</span> <span>$140.00</span></li>
        </ul>
        <div class="cart-btn mt-100">
            <a href="cart.html" class="btn amado-btn w-100">Checkout</a>
        </div>
    </div>
</div> );
}