import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {LeftProductAdd} from './LeftProductAdd';
import {RightProductAdd} from './RightProductAdd';
import {activePage} from '../../../actions';
const ProductEdit = (props) => {
    const [product, setProduct] = useState({})
    useEffect(() => { 
        if(props.location.productProps) {
            setProduct(props.location.productProps);
        }else{     
            fetch(`http://localhost:8000/products/${props.match.params.productId}`,{
                'method': 'GET'
            })
            .then(res => res.json())
            .then(res => console.log(res))
            .then(res => setProduct(res))
            .catch(err => console.log(err));

        }
        // props.dispatch(activePage('/product-details'));
    }, [])
    return ( <div class="cart-table-area section-padding-100">
    <div class="container-fluid">
        <div class="row">
            <LeftProductAdd  product={product} />
            <RightProductAdd/>
        </div>
    </div>
</div> );
}
 
export default connect()(ProductEdit);