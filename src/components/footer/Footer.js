import React from 'react';
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom';

const Footer = (props) => {
    return (
            <footer className="footer_area clearfix">
                <div className="container">
                    <div className="row align-items-center">
                    <div dangerouslySetInnerHTML={{__html: "<!-- Single Widget Area -->"}} />
                        <div className="col-12 col-lg-4">
                            <div className="single_widget_area">
                            <div dangerouslySetInnerHTML={{__html: "<!-- Logo -->"}} />
                                <div className="footer-logo mr-50">
                                    <a href="index.html"><img src={"img/core-img/logo2.png"} alt=""/></a>
                                </div>
                                <div dangerouslySetInnerHTML={{__html: "<!-- Copywrite Text -->"}} />
                                <p className="copywrite">
                                Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i className="fa fa-heart-o" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a> & Re-distributed by <a href="https://themewagon.com/" target="_blank">Themewagon</a>
                                </p>
                            </div>
                        </div>
                        <div dangerouslySetInnerHTML={{__html: "<!-- Single Widget Area -->"}} />
                        <div className="col-12 col-lg-8">
                            <div className="single_widget_area">
                            <div dangerouslySetInnerHTML={{__html: "<!-- Footer Menu -->"}} />                        
                                <div className="footer_menu">
                                    <nav className="navbar navbar-expand-lg justify-content-end">
                                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#footerNavContent" aria-controls="footerNavContent" aria-expanded="false" aria-label="Toggle navigation"><i className="fa fa-bars"></i></button>
                                        <div className="collapse navbar-collapse" id="footerNavContent">
                                            <ul className="navbar-nav ml-auto">
                                                <li className= {props.header.activeMenu === '/' ? 'nav-item active': 'nav-item'}>
                                                    <NavLink className="nav-link" to={"/"}>Home</NavLink>
                                                </li>
                                                <li className= {props.header.activeMenu==='/shop'? 'nav-item active': 'nav-item'}>
                                                    <NavLink className="nav-link" to={"/shop"}>Shop</NavLink>
                                                </li>
                                                <li className= {props.header.activeMenu==='/product-details'? 'nav-item active': 'nav-item'}>
                                                    <NavLink className="nav-link" to={"/product-details"}>Product</NavLink>
                                                </li>
                                                <li className= {props.header.activeMenu==='/cart'? 'nav-item active': 'nav-item'}>
                                                    <NavLink className="nav-link" to={"/cart"}>Cart</NavLink>
                                                </li>
                                                <li className= {props.header.activeMenu==='/checkout'? 'nav-item active': 'nav-item'}>
                                                    <NavLink className="nav-link" to={"/checkout"}>Checkout</NavLink>
                                                </li>
                                            </ul>
                                        </div>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            );
}

const mapStateToProps = (state)=>{
    return {
        header: state.header
    }
 }
export default connect(mapStateToProps, null)(Footer);