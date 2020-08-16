import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import {Breadcrumb} from './Breadcrumb';
import {LeftProductDetails} from './LeftProductDetails';
import {RightProductDetails} from './RightProductDetails';
import {activePage} from '../../actions';

const ProductDetails = (props) => {
    useEffect(() => {       
    props.dispatch(activePage('/product-details'));
    }, [])
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
 
export default connect()(ProductDetails);