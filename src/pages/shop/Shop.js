import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {ShopSidebar} from './ShopSidebar';
import SingleProduct from './SingleProduct/SingleProduct';
import {Pagination} from  './Pagination';
import {ProductView} from  './ProductView';
import {Sorting} from  './Sorting';
import {activePage, addToCart} from '../../actions';

const Shop = (props) => {
    const [products, setProducts] = useState([])
    const [listOrGrid, setListOrGrid] = useState('grid')
    useEffect(() => {       
        fetch('http://localhost:8000/products/',{
            'method': 'GET',
            headers: {
                'content-type': 'application/json',
                // 'Authorization': 'Token 454544'
            }
        })
        .then(res => res.json())
        .then(res => {
            const itemsNotInCart = [...res]
            for (const item of props.cartItems){
                let itemInCart = itemsNotInCart.findIndex((product)=>{
                     return product.id === item.id;
                });
                itemsNotInCart[itemInCart].addToCart=true
            }
            setProducts(itemsNotInCart)
        })
        .catch(err => console.log(err));

    props.dispatch(activePage('/shop'));
    console.log(props)
    }, []);
    const addCartItems = (item)=>{
        const itemsNotInCart = [...products]
        const itemInCart = itemsNotInCart.findIndex((product)=>{
             return product.id === item.id;
        });
        itemsNotInCart[itemInCart].addToCart=true
        setProducts(itemsNotInCart)
    }
    const removeCartItems = (item)=>{
        const itemsNotInCart = [...products]
        const itemInCart = itemsNotInCart.findIndex((product)=>{
             return product.id === item.id;
        });
        itemsNotInCart[itemInCart].addToCart=false
        setProducts(itemsNotInCart)
    }
    
    const listGridView=(view)=>{
        setListOrGrid(view)
    }
    return (<React.Fragment>
                <ShopSidebar/>
                <div class="amado_product_area section-padding-100">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-12">
                                <div class="product-topbar d-xl-flex align-items-end justify-content-between">
                                    <ProductView listGridView={listGridView} listOrGrid={listOrGrid}/>
                                    <Sorting/>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            {products ? products.map((sproduct)=>{
                                return (<SingleProduct productItem={sproduct} cartItems={props.cartItems} addCartItems={addCartItems} removeCartItems={removeCartItems} listOrGrid={listOrGrid}/*dispatch={props.dispatch}*//>)
                            }): <div>no products here</div>}
                        </div>
                        <Pagination/>
                    </div>
                </div>
            </React.Fragment>);
}
const storeToProp = (state)=>{
    return {
        cartItems: state.cart
    }
} 
export default connect(storeToProp, null)(Shop);