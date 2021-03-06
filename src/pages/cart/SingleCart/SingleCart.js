import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {cartIncrement,cartDecrement} from '../../../actions';
const SingleCart = (props) => {
    console.log(props);
    return ( <tr>
        <td className="cart_product_img">
            <Link
                to={{
                pathname: `/product-detail/${props.id}`,
                productdetailProps: props
            }}>
                <img src={props.hoverImage} alt="Product"/>
            </Link>
        </td>
        <td className="cart_product_desc">
            <Link
                to={{
                pathname: `/product-detail/${props.id}`,
                productdetailProps: props
            }}>
            <h5>{props.title}</h5>
            </Link>
        </td>
        <td className="price">
            <span>${props.price}</span>
        </td>
        <td className="qty">
            <div className="qty-btn d-flex">
                <p>Qty</p>
                <div className="quantity">
                    <span className="qty-minus" onClick={()=>props.dispatch(cartDecrement(props.id))}><i className="fa fa-minus" aria-hidden="true"></i></span>
                    <input type="number" className="qty-text" id="qty" step="1" min="1" max="300" name="quantity" value={props.quantity}/>
                    <span className="qty-plus" onClick={()=>props.dispatch(cartIncrement(props.id))}><i className="fa fa-plus" aria-hidden="true"></i></span>
                </div>
            </div>
        </td>
    </tr> );
}
 
export default connect()(SingleCart);