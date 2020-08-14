import React, { useState, useEffect, useRef } from 'react'
import SingleCategory from '../../components/product-single-category/SingleCategory'
import '../../css/core-style.css'
import {Furnitures} from "../../data/Furniture"
const HomePage = () => {
    return ( 
    <React.Fragment>      
            <div class="products-catagories-area clearfix">
                <div class="amado-pro-catagory clearfix">
                    {Furnitures ? Furnitures.map((furniture)=>(
                         <SingleCategory {...furniture}/>
                         )): <div>no products here</div>}
                </div>
            </div>
    </React.Fragment> );
}
 
export default HomePage;