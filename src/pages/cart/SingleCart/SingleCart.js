import React from 'react';

const SingleCart = (props) => {
    console.log(props);
    return ( <tr>
        <td className="cart_product_img">
            <a href="#"><img src={props.image} alt="Product"/></a>
        </td>
        <td className="cart_product_desc">
            <h5>{props.title}</h5>
        </td>
        <td className="price">
            <span>{props.price}</span>
        </td>
        <td className="qty">
            <div className="qty-btn d-flex">
                <p>Qty</p>
                <div className="quantity">
                    <span className="qty-minus" onclick="var effect = document.getElementById('qty'); var qty = effect.value; if( !isNaN( qty ) &amp;&amp; qty &gt; 1 ) effect.value--;return false;"><i className="fa fa-minus" aria-hidden="true"></i></span>
                    <input type="number" className="qty-text" id="qty" step="1" min="1" max="300" name="quantity" value="1"/>
                    <span className="qty-plus" onclick="var effect = document.getElementById('qty'); var qty = effect.value; if( !isNaN( qty )) effect.value++;return false;"><i className="fa fa-plus" aria-hidden="true"></i></span>
                </div>
            </div>
        </td>
    </tr> );
}
 
export default SingleCart;