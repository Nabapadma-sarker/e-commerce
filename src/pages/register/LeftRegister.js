import React, {useState, useEffect} from 'react';
import {NavLink} from 'react-router-dom';

export const LeftRegister = () => {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    return ( 
        <div className="col-12 col-lg-8">
            <div className="checkout_details_area mt-50 clearfix">

                <div className="cart-title">
                    <h2>Register</h2>
                </div>

                <form action="#" method="post">
                    <div className="row">
                        <div className="col-md-12 mb-3">
                            <input type="text" className="form-control" id="username"  onChange={(e)=>{setUsername(e.target.value)}} value={username} placeholder="Username" required/>
                        </div>
                        <div className="col-md-12 mb-3">
                            <input type="text" className="form-control" id="email" onChange={(e)=>{setEmail(e.target.value)}} value={email} placeholder="Email address" required/>
                        </div>
                        <div className="col-md-12 mb-3">
                            <input type="password" className="form-control" id="password" onChange={(e)=>{setPassword(e.target.value)}} value={password} placeholder="Password" required/>
                        </div>
                        <div className="col-12 mb-3">
                            <select className="form-control selectpicker " data-style="btn-success" id="groups">
                                <option value="0" selected>Select Ctegory</option>
                                <option value="1">Seller</option>
                                <option value="2">Customer</option>
                            </select>
                        </div>

                        <div className="col-md-4 mt-10">
                            <a href="#" className="btn amado-btn w-100">Register</a>
                            <div className="mt-10">
                            if you already have account, <NavLink to={"/login"}>Login</NavLink> here
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div> );
}