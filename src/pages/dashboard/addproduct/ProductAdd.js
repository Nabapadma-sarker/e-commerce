import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {LeftProductAdd} from './LeftProductAdd';
import {RightProductAdd} from './RightProductAdd';
import {activePage} from '../../../actions';
import {useHistory} from 'react-router-dom';
import { useCookies } from 'react-cookie';
const ProductAdd = (props) => {
    const [cookies, setCookie] = useCookies(['etoken']);
    let history = useHistory();
    
    useEffect(() => {
        if(!cookies['etoken']){
            history.push('/login');
        }
    },[cookies])
    return ( <div class="cart-table-area section-padding-100">
    <div class="container-fluid">
        <div class="row">
            <LeftProductAdd/>
            {/* <RightProductAdd/> */}
        </div>
    </div>
</div> );
}
 
export default connect()(ProductAdd);