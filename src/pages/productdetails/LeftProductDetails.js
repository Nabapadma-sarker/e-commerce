import React from 'react';

export const LeftProductDetails = ({productDetail}) => {
    console.log(productDetail)
    return ( 
        <div className="col-12 col-lg-7">
            <div className="single_product_thumb">
                <div id="product_details_slider" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li className="active" data-target="#product_details_slider" data-slide-to="0" style={{backgroundImage: `url(${productDetail.hoverImage})`}}>
                        </li>
                        {/* <li data-target="#product_details_slider" data-slide-to="1" style={{backgroundImage: `url(${productDetail.hoverImage})`}}>
                        </li>
                        <li data-target="#product_details_slider" data-slide-to="2" style={{backgroundImage: `url(${productDetail.hoverImage})`}}>
                        </li>
                        <li data-target="#product_details_slider" data-slide-to="3" style={{backgroundImage: `url(${productDetail.hoverImage})`}}>
                        </li> */}

                        {productDetail && productDetail.productImage && productDetail.productImage.map((pim)=>(
                             <li data-target="#product_details_slider" data-slide-to={pim.id} style={{backgroundImage: `url(${pim.imageLink})`}}>
                             </li>
                        ))}
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <a className="gallery_img" href={productDetail.hoverImage}>
                                <img className="d-block w-100" src={productDetail.hoverImage} alt="First slide"/>
                            </a>
                        </div>
                        {productDetail && productDetail.productImage && productDetail.productImage.map((pim)=>(
                            <div className="carousel-item">
                                <a className="gallery_img" href={pim.imageLink}>
                                    <img className="d-block w-100" src={pim.imageLink} alt="Second slide"/>
                                </a>
                            </div>
                        ))}
                        {/* <div className="carousel-item">
                            <a className="gallery_img" href={productDetail.hoverImage}>
                                <img className="d-block w-100" src={productDetail.hoverImage} alt="Second slide"/>
                            </a>
                        </div>
                        <div className="carousel-item">
                            <a className="gallery_img" href="img/product-img/pro-big-3.jpg">
                                <img className="d-block w-100" src={productDetail.hoverImage} alt="Third slide"/>
                            </a>
                        </div>
                        <div className="carousel-item">
                            <a className="gallery_img" href="img/product-img/pro-big-4.jpg">
                                <img className="d-block w-100" src={productDetail.hoverImage} alt="Fourth slide"/>
                            </a>
                        </div> */}
                    </div>
                </div>
            </div>
        </div> );
}