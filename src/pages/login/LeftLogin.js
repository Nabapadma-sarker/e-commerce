import React, {useState, useEffect} from 'react';
import {NavLink, useHistory} from 'react-router-dom';
import APIService from '../../APIService';
import { useCookies } from 'react-cookie';

export const LeftLogin = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [cookies, setCookie] = useCookies(['etoken']);
    const [userid, setUserid] = useCookies(['user_id']);
    let history = useHistory();
    
    useEffect(() => {
        if(cookies['etoken']){
            history.push('/dashboard');
        }
    },[cookies])

    const onChangeUsername = (e) => {
        setUsername(e.target.value);
    }
    const onChangePassword = (e) => {
        setPassword(e.target.value);
    }
    const onSubmit = (e) => {
        e.preventDefault();
        APIService.LoginUser({username, password})
        .then(res=> {
            if (res.token) {
                setCookie('etoken', res.token)                
                setUserid('user_id', res.user_id)                
            }
        })
        .catch(err=> console.log(err));
    }
    return ( 
        <div className="col-12 col-lg-8">
            <div className="checkout_details_area mt-50 clearfix">

                <div className="cart-title">
                    <h2>Login</h2>
                </div>

                <form action="" method="post">
                    <div className="row">
                        <div className="col-md-12 mb-3">
                            <input type="text" className="form-control" id="email" value={username} placeholder="User name" onChange={onChangeUsername} required/>
                        </div>
                        <div className="col-md-12 mb-3">
                            <input type="text" className="form-control" id="password" value={password} placeholder="Password" onChange={onChangePassword} required/>
                        </div>

                        <div className="col-md-4 mt-10">
                            <button className="btn amado-btn w-100" onClick={onSubmit}>Login</button>
                            <div className="mt-10">
                            if you don't have account? <NavLink to={"/signup"}>Signup</NavLink> here
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div> );
}