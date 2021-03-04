import React from 'react';
const SingleCategory = (props) => {
    return (  <div className="single-products-catagory clearfix">
                    <a href="/">
                        <img src={props.image} alt=""/>                  
                        <div className="hover-content">
                            <div className="line"></div>
                            <p>{props.description}</p>
                            <h4>{props.title}</h4>
                        </div>
                    </a>
                </div> );
}
 
export default SingleCategory;