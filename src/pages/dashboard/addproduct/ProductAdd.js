import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {LeftProductAdd} from './LeftProductAdd';
import {RightProductAdd} from './RightProductAdd';
import {activePage} from '../../../actions';
const productAdd = (props) => {
    // useEffect(() => {       
    // props.dispatch(activePage('/add-new-product'));
    // }, []);
    return ( <div class="cart-table-area section-padding-100">
    <div class="container-fluid">
        <div class="row">
            <LeftProductAdd/>
            <RightProductAdd/>
        </div>
    </div>
</div> );
}
 
export default connect()(productAdd);