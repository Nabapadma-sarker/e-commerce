import React from 'react';
import {Breadcrumb} from './Breadcrumb';
import {LeftProductDetails} from './LeftProductDetails';
import {RightProductDetails} from './RightProductDetails';

const ProductDetails = () => {
    return (
        <div class="single-product-area section-padding-100 clearfix">
            <div class="container-fluid">
                <Breadcrumb/>
                <div class="row">
                    <LeftProductDetails/>
                    <RightProductDetails/>
                </div>
            </div>
        </div>);
}
 
export default ProductDetails;