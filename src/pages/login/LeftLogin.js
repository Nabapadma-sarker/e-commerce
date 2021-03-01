import React from 'react';

export const LeftLogin = () => {
    return ( 
        <div className="col-12 col-lg-8">
            <div className="checkout_details_area mt-50 clearfix">

                <div className="cart-title">
                    <h2>Login</h2>
                </div>

                <form action="#" method="post">
                    <div className="row">
                        <div className="col-md-12 mb-3">
                            <input type="text" className="form-control" id="email" value="" placeholder="Email address" required/>
                        </div>
                        <div className="col-md-12 mb-3">
                            <input type="text" className="form-control" id="password" value="" placeholder="Password" required/>
                        </div>
                    </div>
                </form>
            </div>
        </div> );
}