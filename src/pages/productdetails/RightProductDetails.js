import React from 'react';
import {AddToCart} from './AddToCart';

export const RightProductDetails = () => {
    return ( 
        <div class="col-12 col-lg-5">
            <div class="single_product_desc">
                <div class="product-meta-data">
                    <div class="line"></div>
                    <p class="product-price">$180</p>
                    <a href="product-details.html">
                        <h6>White Modern Chair</h6>
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
                    <p class="avaibility"><i class="fa fa-circle"></i> In Stock</p>
                </div>

                <div class="short_overview my-5">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid quae eveniet culpa officia quidem mollitia impedit iste asperiores nisi reprehenderit consequatur, autem, nostrum pariatur enim?</p>
                </div>

               <AddToCart/>

            </div>
        </div> );
}