import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {addCart} from '../../../actions';

const ListSingleProduct = (props) => {
    return ( <div class="item list-group-item">
                <div class="thumbnail card col-xs-12 col-lg-12">
                    <div class="img-event">
                        <img class="group list-group-image img-fluid" src={props.hoverImage} alt="" />
                    </div>
                    <div class="caption card-body">
                        <h4 class="group card-title inner list-group-item-heading">
                            <Link
                                to={{
                                    pathname: `/product-detail/${props.id}`,
                                    productdetailProps: props
                                }}>
                                {props.title}
                            </Link>
                            </h4>
                        <p class="group inner list-group-item-text">
                        {props.description}</p>
                        <div class="row">
                            <div class="col-xs-12 col-md-6">
                                <p class="lead">
                                    ${props.price}
                                </p>
                            </div>
                            <div class="col-xs-12 col-md-6">
                            <Link
                                to={{
                                    pathname: `/edit-product/${props.id}`,
                                    productProps: props
                                }}>
                                Edit Product
                            </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
             );
}
export default connect()(ListSingleProduct);
