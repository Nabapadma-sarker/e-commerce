import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {LeftCheckout} from './LeftCheckout';
import {RightCheckout} from './RightCheckout';
import {activePage} from '../../actions';
const Checkout = (props) => {
    useEffect(() => {       
    props.dispatch(activePage('/checkout'));
    }, [])
    return ( <div class="cart-table-area section-padding-100">
    <div class="container-fluid">
        <div class="row">
            <LeftCheckout/>
            <RightCheckout/>
        </div>
    </div>
</div> );
}
 
export default connect()(Checkout);