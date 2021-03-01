import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {LeftRegister} from './LeftRegister';
import {activePage} from '../../actions';
const Register = (props) => {
    // useEffect(() => {       
    // props.dispatch(activePage('/add-new-product'));
    // }, []);
    return ( <div class="cart-table-area section-padding-100">
    <div class="container-fluid">
        <div class="row">
            <LeftRegister/>
        </div>
    </div>
</div> );
}
 
export default connect()(Register);