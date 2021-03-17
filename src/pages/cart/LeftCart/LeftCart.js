import React from 'react';
import {connect} from 'react-redux';
import SingleCart from '../SingleCart/SingleCart';

const LeftCart = (props) => {
    console.log(props.cartItem);
    return ( <div className="col-12 col-lg-8">
    <div className="cart-title mt-50">
        <h2>Shopping Cart</h2>
    </div>

    <div className="cart-table clearfix">
        <table className="table table-responsive">
            <thead>
                <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                </tr>
            </thead>
            <tbody>
                {props.cartItem ? props.cartItem.map(singleCart=>(
                    <SingleCart {...singleCart}/>
                )): null}                
            </tbody>
        </table>
    </div>
</div> );
}

export default connect()(LeftCart);