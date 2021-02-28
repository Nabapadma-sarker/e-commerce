import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {addCart} from '../../../actions';

const SingleProduct = (props) => {
    return ( 
        <div className="col-12 col-sm-6 col-md-12 col-xl-6">
            <div className="single-product-wrapper">
                <div className="product-img">
                    <img src={props.hoverImage} alt=""/>
                    <img className="hover-img" src={props.hoverImage} alt=""/>
                </div>

                <div className="product-description d-flex align-items-center justify-content-between">
                    <div className="product-meta-data">
                        <div className="line"></div>
                        <p className="product-price">${props.price}</p>
                        <Link
                            to={{
                            pathname: `/product-detail/${props.id}`,
                            productdetailProps: props
                        }}>
                            <h6>{props.title}</h6>
                        </Link>
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
                            {!props.addToCart ? <a style={{cursor: "pointer"}} data-toggle="tooltip" data-placement="left" title="Add to Cart"><img src={"img/core-img/cart.png"} alt="" onClick={()=> props.dispatch(addCart(props.id))}/></a>
                            : <Link to="/cart" data-toggle="tooltip" data-placement="left" title="Go To Cart"><img src={"img/core-img/addedtocart.png"} alt=""/></Link>}
                        </div>
                    </div>
                </div>
            </div>
        </div> );
}
export default connect()(SingleProduct);
