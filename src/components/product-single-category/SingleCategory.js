import React from 'react';
import {Link} from 'react-router-dom';
const SingleCategory = (props) => {
    return (  <div className="single-products-catagory clearfix">
                    <Link
                        to={{
                            pathname: `/product-detail/${props.id}`,
                            productdetailProps: props
                        }}>
                            <img src={props.hoverImage} alt=""/>                  
                            <div className="hover-content">
                                <div className="line"></div>
                                <i style={{fontSize:"10px"}}>by {props.user.username}</i>
                                <p>{props.description}</p>
                                <h4>{props.title}</h4>
                            </div>
                    </Link>
                </div> );
}
 
export default SingleCategory;