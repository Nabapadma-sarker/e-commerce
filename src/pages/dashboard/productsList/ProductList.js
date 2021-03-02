import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {LeftProductList} from './LeftProductList';
import {RightProductList} from './RightProductList';
import {activePage} from '../../../actions';
const productAdd = (props) => {
    // useEffect(() => {       
    // props.dispatch(activePage('/add-new-product'));
    // }, []);
    return ( <div class="cart-table-area section-padding-100">
    <div class="container-fluid">
        <div class="row">
            <LeftProductList/>
            <RightProductList/>
        </div>
    </div>
</div> );
}
 
export default connect()(productAdd);