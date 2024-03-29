import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {addCart} from '../../../actions';

const ListSingleProduct = (props) => {
    return ( <div class="item list-group-item">
                <div class="thumbnail card col-xs-12 col-lg-12">
                    <div class="img-event card-body">
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
                            <i style={{fontSize:"10px"}}>by {props.user.username}</i>
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
                                }} className="btn btn-secondary mr-2 mt-2">
                                Edit Product
                            </Link>
                            <button type="button" class="btn btn-danger mt-2" onClick={e => props.dproduct(props.id)}>Delete</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
             );
}
export default connect()(ListSingleProduct);
