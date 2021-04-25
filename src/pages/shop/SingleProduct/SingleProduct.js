import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {addCart, removeCart} from '../../../actions';

const SingleProduct = (props) => {
    useEffect(() => {
        console.log(props)
    },[])
    return ( 
        <div className={"col-12 col-sm-6 col-md-12 " + (props.listOrGrid == 'list'? 'col-xl-12': 'col-xl-6')}>
            <div className={"single-product-wrapper " + (props.listOrGrid == 'list'? 'row': '')}>
                <div className={"product-img "+ (props.listOrGrid == 'list'? 'col-xl-3': '')}>
                    <img src={props.productItem.hoverImage} alt=""/>
                    <img className="hover-img" src={props.productItem.hoverImage} alt=""/>
                </div>

                <div className={"product-description d-flex align-items-center justify-content-between " + (props.listOrGrid == 'list'? 'col-xl-9': '')}>
                    <div className="product-meta-data">
                        <div className="line"></div>
                        <p className="product-price">${props.productItem.price}</p>
                        <Link
                            to={{
                            pathname: `/product-detail/${props.productItem.id}`,
                            productdetailProps: props.productItem
                        }}>
                            <h6>{props.productItem.title}</h6>
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
                            {!props.productItem.addToCart ? <a style={{cursor: "pointer"}} data-toggle="tooltip" data-placement="left" title="Add to Cart"><img src={"img/core-img/cart.png"} alt="" onClick={()=> {props.dispatch(addCart(props.productItem));props.addCartItems(props.productItem);}}/></a>
                            : <a style={{cursor: "pointer"}} data-toggle="tooltip" data-placement="left" title="Add to Cart"><img src={"img/core-img/addedtocart.png"} alt="" onClick={()=> {props.dispatch(removeCart(props.productItem));props.removeCartItems(props.productItem);}}/></a>}
                        </div>
                    </div>
                </div>
            </div>
        </div> );
}
export default connect()(SingleProduct);
