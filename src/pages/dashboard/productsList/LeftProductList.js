import React, {useState, useEffect} from 'react';
import ListSingleProduct from './ListSingleProduct';

export const LeftProductList = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {       
        fetch('http://localhost:8000/products/',{
            'method': 'GET',
            headers: {
                'content-type': 'application/json',
                // 'Authorization': 'Token 454544'
            }
        })
        .then(res => res.json())
        .then(res => setProducts(res))
        .catch(err => console.log(err));

    // props.dispatch(activePage('/shop'));
    }, []);
    return ( 
        <div className="col-12 col-lg-8">
            <div className="checkout_details_area mt-50 clearfix">

                <div className="cart-title">
                    <h2>Product List</h2>
                </div>                
                <div class="row view-group">
                    {products ? products.map((sproduct)=>{
                        return (<ListSingleProduct {...sproduct} />)
                    }): <div>no products here</div>}
                </div>
            </div>
        </div> );
}