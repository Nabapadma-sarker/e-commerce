import React from 'react';
import {AddToCart} from './AddToCart';

export const RightProductDetails = ({productDetail}) => {
    return ( 
        <div class="col-12 col-lg-5">
            <div class="single_product_desc">
                <div class="product-meta-data">
                    <div class="line"></div>
                    <p class="product-price">${productDetail.price}</p>
                    <a href="product-details.html">
                        <h6>{productDetail.title}</h6>
                    </a>
                    <div class="ratings-review mb-15 d-flex align-items-center justify-content-between">
                        <div class="ratings">
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                        </div>
                        <div class="review">
                            <a href="#">Write A Review</a>
                        </div>
                    </div>
                    <p class="avaibility"><i class="fa fa-circle"></i> {productDetail.remainQuantity && productDetail.remainQuantity > 0 ? `In Stock ${productDetail.remainQuantity}`: `Out of Stock`}</p>
                </div>

                <div class="short_overview my-5">
                    <p>{productDetail.description}</p>
                </div>

               <AddToCart/>

            </div>
        </div> );
}