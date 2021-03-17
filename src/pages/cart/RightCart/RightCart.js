import React from 'react';
import {NavLink} from 'react-router-dom';

export const RightCart = (props) => {
    const calculateTotal = (items)=>{
        return items.reduce((totalCost, item) => totalCost + parseInt(item.price)*parseInt(item.quantity), 0)
    }
    return ( <div className="col-12 col-lg-4">
    <div className="cart-summary">
        <h5>Cart Total</h5>
        <ul className="summary-table">
            <li><span>subtotal:</span> <span>${calculateTotal(props.cartItem)}</span></li>
            <li><span>delivery:</span> <span>${calculateTotal(props.cartItem)*.01}</span></li>
            <li><span>total:</span> <span>${calculateTotal(props.cartItem)+calculateTotal(props.cartItem)*.01}</span></li>
        </ul>
        <div className="cart-btn mt-100">
            <NavLink to={"/checkout"} className="btn amado-btn w-100">Checkout</NavLink>
        </div>
    </div>
</div> );
}