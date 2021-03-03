import React, {useEffect, useState} from 'react';
import {NavLink, Link, useHistory} from 'react-router-dom';
import {connect} from 'react-redux';
import {useCookies} from 'react-cookie';

const Header = (props) => {
    const [cookies, setCookie, removeCookie] = useCookies(['etoken']);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    let history = useHistory();
    
    useEffect(() => {
        if(!cookies['etoken']){
            setIsLoggedIn(false)
            history.push('/login');
        }
        else{
            setIsLoggedIn(true)
        }
    },[cookies])
    const logout = (e)=>{
        e.preventDefault();
        removeCookie(['etoken']);
    }
    return ( 
            <header className="header-area clearfix">         
                <div className="nav-close">
                    <i className="fa fa-close" aria-hidden="true"></i>
                </div>
                <div className="logo">

                <Link
                    to={{
                        pathname: `/`
                    }}>
                    <img src={"img/core-img/logo.png"} alt="" />
                </Link>
                </div>         
                <nav className="amado-nav">
                    <ul>
                        <li className = {props.header.activeMenu==='/'? 'active': ''}><NavLink to={"/"}>Home</NavLink></li>
                        <li className = {props.header.activeMenu==='/shop'? 'active': ''}><NavLink to={"/shop"}>Shop</NavLink></li>
                        <li className = {props.header.activeMenu==='/cart'? 'active': ''}><NavLink to={"/cart"}>Cart</NavLink></li>
                        <li className = {props.header.activeMenu==='/checkout'? 'active': ''}><NavLink to={"/checkout"}>Checkout</NavLink></li>
                        { !isLoggedIn && <li className = {props.header.activeMenu==='/login'? 'active': ''}><NavLink to={"/login"}>Login</NavLink></li>}
                        { isLoggedIn && <li className = {props.header.activeMenu==='/dashboard'? 'active': ''}><NavLink to={"/dashboard"}>Dashboard</NavLink></li>}
                        { isLoggedIn && <li><a href="#" onClick={logout}>Logout</a></li>}
                    </ul>
                </nav>
                <div className="amado-btn-group mt-30 mb-100">
                    <a href="#" className="btn amado-btn mb-15">%Discount%</a>
                    <a href="#" className="btn amado-btn active">New this week</a>
                </div>
                <div className="cart-fav-search mb-100">
                    <a href="cart.html" className="cart-nav"><img src={"img/core-img/cart.png"} alt="" /> Cart <span>(0)</span></a>
                    <a href="#" className="fav-nav"><img src={"img/core-img/favorites.png"} alt="" /> Favourite</a>
                    <a href="#" className="search-nav"><img src={"img/core-img/search.png"} alt="" /> Search</a>
                </div>
                <div className="social-info d-flex justify-content-between">
                    <a href="#"><i className="fa fa-pinterest" aria-hidden="true"></i></a>
                    <a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a>
                    <a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a>
                    <a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a>
                </div>
            </header>
        );
}

const mapStateToProps = (state)=>{
   return {
       header: state.header
   }
}
export default connect(mapStateToProps, null)(Header);