import React, {useState, useEffect} from 'react';
import ListSingleProduct from './ListSingleProduct';
import APIService from '../../../APIService';
import {useCookies} from 'react-cookie';

export const LeftProductList = () => {
    const [products, setProducts] = useState([])
    const [cookies, setCookie] = useCookies(['etoken']);
    useEffect(() => {       
        fetch('http://localhost:8000/products-user/',{
            'method': 'GET',
            headers: {
                'content-type': 'application/json',
                'Authorization':`Token ${cookies['etoken']}` 
            }
        })
        .then(res => res.json())
        .then(res => {
            console.log(res)
            setProducts(res)
            }
            )
        .catch(err => console.log(err));

    // props.dispatch(activePage('/shop'));
    }, []);
    const deleteProduct=(productId)=>{
        console.log("w",productId)
        
        try{
            APIService.DeleteProduct(productId, cookies['etoken'])
            .then(res => {
                const remainProducts = products.filter((p)=> p.id !=productId )
                setProducts(remainProducts)
                console.log(res);
            })
        }
        catch(err){
            console.log(err)
        };
    }
    return ( 
        <div className="col-12 col-lg-8">
            <div className="checkout_details_area mt-50 clearfix">

                <div className="cart-title">
                    <h2>Product List</h2>
                </div>                
                <div class="row view-group">
                    {products.length > 0 ? products.map((sproduct)=>{
                        return (<ListSingleProduct {...sproduct} dproduct={deleteProduct} />)
                    }): <div>no products were added.</div>}
                </div>
            </div>
        </div> );
}