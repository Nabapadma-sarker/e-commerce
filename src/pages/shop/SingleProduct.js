import React from 'react';

export const SingleProduct = (props) => {
    return ( 
        <div className="col-12 col-sm-6 col-md-12 col-xl-6">
            <div className="single-product-wrapper">
                <div className="product-img">
                    <img src={props.image} alt=""/>
                    <img className="hover-img" src={props.hoverImage} alt=""/>
                </div>

                <div className="product-description d-flex align-items-center justify-content-between">
                    <div className="product-meta-data">
                        <div className="line"></div>
                        <p className="product-price">{props.price}</p>
                        <a href="product-details.html">
                            <h6>{props.title}</h6>
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