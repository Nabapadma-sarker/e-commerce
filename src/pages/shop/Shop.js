import React from 'react';
import {ShopSidebar} from './ShopSidebar';
import {SingleProduct} from './SingleProduct';
import {Pagination} from  './Pagination';
import {ProductView} from  './ProductView';
import {Sorting} from  './Sorting';


const Shop = () => {
    return (<React.Fragment>
                <ShopSidebar/>
                <div class="amado_product_area section-padding-100">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-12">
                                <div class="product-topbar d-xl-flex align-items-end justify-content-between">
                                    <ProductView/>
                                    <Sorting/>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <SingleProduct/>
                        </div>
                        <Pagination/>
                    </div>
                </div>
            </React.Fragment>);
}
 
export default Shop;