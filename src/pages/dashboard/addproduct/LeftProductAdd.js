import React from 'react';

export const LeftProductAdd = ({product}) => {
    console.log(product);
    return ( 
        <div className="col-12 col-lg-8">
            <div className="checkout_details_area mt-50 clearfix">

                <div className="cart-title">
                    <h2>Add New Product</h2>
                </div>

                <form action="#" method="post">
                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <input type="text" className="form-control" id="title" value={product && product.title} placeholder="Product Title" required/>
                        </div>
                        <div className="col-md-6 mb-3">
                            <input type="number" className="form-control" id="price" value={product && product.price} placeholder="Product Price" required/>
                        </div>
                        <div className="col-12 mb-3">
                            <input type="number" className="form-control" id="remainQuantity" placeholder="Total Products" value={product && product.remainQuantity}/>
                        </div>
                        <div className="col-12 mb-3">
                            <textarea name="description" className="form-control w-100" id="description" cols="30" rows="10" placeholder="Details describe about your order">{product && product.description}</textarea>
                        </div>
                        <div className="col-12 mb-3">
                            <select className="w-100" id="productCategorie">
                                <option value="1">Chair</option>
                                <option value="2">Table</option>
                                <option value="3">Desk</option>
                            </select>
                        </div>
                    </div>
                </form>
            </div>
        </div> );
}