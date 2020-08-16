import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {ShopSidebar} from './ShopSidebar';
import SingleProduct from './SingleProduct/SingleProduct';
import {Pagination} from  './Pagination';
import {ProductView} from  './ProductView';
import {Sorting} from  './Sorting';
import {activePage, addToCart} from '../../actions';

const Shop = (props) => {
    useEffect(() => {       
    props.dispatch(activePage('/shop'));
    }, []);
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
                            {props.productItems ? props.productItems.map((sproduct)=>{
                                return (<SingleProduct {...sproduct} />)
                            }): <div>no products here</div>}
                        </div>
                        <Pagination/>
                    </div>
                </div>
            </React.Fragment>);
}
const storeToProp = (state)=>{
    return {
        productItems: state.products
    }
} 
export default connect(storeToProp, null)(Shop);