import React from 'react';
const SingleCategory = (props) => {
    return ( <React.Fragment>
                <div class="single-products-catagory clearfix">
                    <a href="shop.html">
                        <img src={props.image} alt=""/>                  
                        <div class="hover-content">
                            <div class="line"></div>
                            <p>{props.description}</p>
                            <h4>{props.title}</h4>
                        </div>
                    </a>
                </div>
            </React.Fragment> );
}
 
export default SingleCategory;