import React from 'react';

export const RightProductList = () => {
    return ( 
        <div className="col-12 col-lg-4">
            <div className="cart-summary">
                <h5>Sellers Details</h5>
                <ul className="summary-table">
                    <li><span>name:</span> <span>alice</span></li>
                    <li><span>Total product:</span> <span>30</span></li>
                    <li><span>total sells:</span> <span>12</span></li>
                    <li><span>total Balance:</span> <span>$5000</span></li>
                </ul>

                <div className="cart-btn mt-100">
                    <a href="#" className="btn amado-btn w-100">Add new Product</a>
                </div>
            </div>
        </div> );
}