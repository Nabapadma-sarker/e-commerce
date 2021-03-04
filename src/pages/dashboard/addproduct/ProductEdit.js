import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {LeftProductAdd} from './LeftProductAdd';
import {RightProductAdd} from './RightProductAdd';
import {activePage} from '../../../actions';
import {useHistory} from 'react-router-dom';
import { useCookies } from 'react-cookie';
const ProductEdit = (props) => {
    const [product, setProduct] = useState({})
    const [cookies, setCookie] = useCookies(['etoken']);
    let history = useHistory();
    
    useEffect(() => {
        if(!cookies['etoken']){
            history.push('/login');
        }
    },[cookies])
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
            <LeftProductAdd  product={product} pid={props.match.params.productId}/>
            <RightProductAdd/>
        </div>
    </div>
</div> );
}
 
export default connect()(ProductEdit);