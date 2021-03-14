import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import SingleCategory from '../../components/product-single-category/SingleCategory'
import '../../css/core-style.css'
import {Furnitures} from "../../data/Furniture"
import {activePage} from '../../actions'
import { useCookies } from 'react-cookie';
const HomePage = (props) => {
    const [products, setProducts] = useState([])
    const [cookies, setCookie] = useCookies(['etoken']);
    useEffect(() => {       
        fetch('http://localhost:8000/products/',{
            'method': 'GET',
            headers: {
                'content-type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(res => setProducts(res))
        .catch(err => console.log(err));

        props.dispatch(activePage('/'));
    }, []);
    return (<div className="products-catagories-area clearfix">
                <div className="amado-pro-catagory clearfix">
                    {products ? products.map((furniture)=>(
                         <SingleCategory {...furniture}/>
                         )): <div>no products here</div>}
                </div>
            </div>);
}
 
export default connect()(HomePage);