import React from 'react';

export const LeftProductDetails = () => {
    return ( 
        <div className="col-12 col-lg-7">
            <div className="single_product_thumb">
                <div id="product_details_slider" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li className="active" data-target="#product_details_slider" data-slide-to="0" style={{backgroundImage: "url(img/product-img/pro-big-1.jpg)"}}>
                        </li>
                        <li data-target="#product_details_slider" data-slide-to="1" style={{backgroundImage: "url(img/product-img/pro-big-2.jpg)"}}>
                        </li>
                        <li data-target="#product_details_slider" data-slide-to="2" style={{backgroundImage: "url(img/product-img/pro-big-3.jpg)"}}>
                        </li>
                        <li data-target="#product_details_slider" data-slide-to="3" style={{backgroundImage: "url(img/product-img/pro-big-4.jpg)"}}>
                        </li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <a className="gallery_img" href={"img/product-img/pro-big-1.jpg"}>
                                <img className="d-block w-100" src={"img/product-img/pro-big-1.jpg"} alt="First slide"/>
                            </a>
                        </div>
                        <div className="carousel-item">
                            <a className="gallery_img" href="img/product-img/pro-big-2.jpg">
                                <img className="d-block w-100" src={"img/product-img/pro-big-2.jpg"} alt="Second slide"/>
                            </a>
                        </div>
                        <div className="carousel-item">
                            <a className="gallery_img" href="img/product-img/pro-big-3.jpg">
                                <img className="d-block w-100" src={"img/product-img/pro-big-3.jpg"} alt="Third slide"/>
                            </a>
                        </div>
                        <div className="carousel-item">
                            <a className="gallery_img" href="img/product-img/pro-big-4.jpg">
                                <img className="d-block w-100" src={"img/product-img/pro-big-4.jpg"} alt="Fourth slide"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div> );
}