import React from 'react';

export const SingleProduct = () => {
    return ( 
        <div className="col-12 col-sm-6 col-md-12 col-xl-6">
            <div className="single-product-wrapper">
                <div className="product-img">
                    <img src={"img/product-img/product5.jpg"} alt=""/>
                    <img className="hover-img" src={"img/product-img/product6.jpg"} alt=""/>
                </div>

                <div className="product-description d-flex align-items-center justify-content-between">
                    <div className="product-meta-data">
                        <div className="line"></div>
                        <p className="product-price">$180</p>
                        <a href="product-details.html">
                            <h6>Modern Chair</h6>
                        </a>
                    </div>
                    <div className="ratings-cart text-right">
                        <div className="ratings">
                            <i className="fa fa-star" aria-hidden="true"></i>
                            <i className="fa fa-star" aria-hidden="true"></i>
                            <i className="fa fa-star" aria-hidden="true"></i>
                            <i className="fa fa-star" aria-hidden="true"></i>
                            <i className="fa fa-star" aria-hidden="true"></i>
                        </div>
                        <div className="cart">
                            <a href="cart.html" data-toggle="tooltip" data-placement="left" title="Add to Cart"><img src={"img/core-img/cart.png"} alt=""/></a>
                        </div>
                    </div>
                </div>
            </div>
        </div> );
}