import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {LeftLogin} from './LeftLogin';
import {RightLogin} from './RightLogin';
import {activePage} from '../../actions';
const Login = (props) => {
    useEffect(() => {       
    props.dispatch(activePage('/login'));
    }, []);
    console.log(props.location.pathname);
    return ( <div class="cart-table-area section-padding-100">
    <div class="container-fluid">
        <div class="row">
            <LeftLogin/>
        </div>
    </div>
</div> );
}
 
export default connect()(Login);