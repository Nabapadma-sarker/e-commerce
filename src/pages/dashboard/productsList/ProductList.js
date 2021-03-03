import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {LeftProductList} from './LeftProductList';
import {RightProductList} from './RightProductList';
import {activePage} from '../../../actions';
import {useHistory} from 'react-router-dom';
import { useCookies } from 'react-cookie';


const ProductList = (props) => {
    const [cookies, setCookie] = useCookies(['etoken']);
    let history = useHistory();
    

    useEffect(()=>{
        props.dispatch(activePage('/dashboard'));
    },[])

    useEffect(() => {
        if(!cookies['etoken']){
            history.push('/login');
        }
    },[cookies])
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
 
export default connect()(ProductList);