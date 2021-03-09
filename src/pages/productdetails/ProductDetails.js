import React, {useState,useEffect} from 'react';
import { connect } from 'react-redux';
import {Breadcrumb} from './Breadcrumb';
import {LeftProductDetails} from './LeftProductDetails';
import {RightProductDetails} from './RightProductDetails';
import {activePage} from '../../actions';

const ProductDetails = (props) => {
    const [productDetail, setProductDetail] = useState({})
    // console.log(props.match.params.productId)
    // console.log(props.location.productdetailProps)
    useEffect(() => { 
        if(props.location.productdetailProps) {
            setProductDetail(props.location.productdetailProps);
        }else{     
            fetch(`http://localhost:8000/productslist/${props.match.params.productId}`,{
                'method': 'GET'
            })
            .then(res => res.json())
            // .then(res => console.log(res))
            .then(res => setProductDetail(res))
            .catch(err => console.log(err));

        }
        props.dispatch(activePage('/product-details'));
    }, [])
    return (
        <div class="single-product-area section-padding-100 clearfix">
            <div class="container-fluid">
                <Breadcrumb/>
                <div class="row">
                    <LeftProductDetails productDetail={productDetail} />
                    <RightProductDetails productDetail={productDetail} />
                </div>
            </div>
        </div>);
}
 
export default connect()(ProductDetails);