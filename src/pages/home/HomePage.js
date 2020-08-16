import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import SingleCategory from '../../components/product-single-category/SingleCategory'
import '../../css/core-style.css'
import {Furnitures} from "../../data/Furniture"
import {activePage} from '../../actions'
const HomePage = (props) => {
    useEffect(() => {       
    props.dispatch(activePage('/'));
    }, [])
    return (<div className="products-catagories-area clearfix">
                <div className="amado-pro-catagory clearfix">
                    {Furnitures ? Furnitures.map((furniture)=>(
                         <SingleCategory {...furniture}/>
                         )): <div>no products here</div>}
                </div>
            </div>);
}
 
export default connect()(HomePage);