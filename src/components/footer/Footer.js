import React from 'react';
import {NavLink} from 'react-router-dom';

const Footer = () => {
    return (
            <footer class="footer_area clearfix">
                <div class="container">
                    <div class="row align-items-center">
                    <div dangerouslySetInnerHTML={{__html: "<!-- Single Widget Area -->"}} />
                        <div class="col-12 col-lg-4">
                            <div class="single_widget_area">
                            <div dangerouslySetInnerHTML={{__html: "<!-- Logo -->"}} />
                                <div class="footer-logo mr-50">
                                    <a href="index.html"><img src={"img/core-img/logo2.png"} alt=""/></a>
                                </div>
                                <div dangerouslySetInnerHTML={{__html: "<!-- Copywrite Text -->"}} />
                                <p class="copywrite">
                                Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i class="fa fa-heart-o" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a> & Re-distributed by <a href="https://themewagon.com/" target="_blank">Themewagon</a>
                                </p>
                            </div>
                        </div>
                        <div dangerouslySetInnerHTML={{__html: "<!-- Single Widget Area -->"}} />
                        <div class="col-12 col-lg-8">
                            <div class="single_widget_area">
                            <div dangerouslySetInnerHTML={{__html: "<!-- Footer Menu -->"}} />                        
                                <div class="footer_menu">
                                    <nav class="navbar navbar-expand-lg justify-content-end">
                                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#footerNavContent" aria-controls="footerNavContent" aria-expanded="false" aria-label="Toggle navigation"><i class="fa fa-bars"></i></button>
                                        <div class="collapse navbar-collapse" id="footerNavContent">
                                            <ul class="navbar-nav ml-auto">
                                                <li class="nav-item active">
                                                    <NavLink className="nav-link" to={"/"}>Home</NavLink>
                                                </li>
                                                <li class="nav-item">
                                                    <NavLink className="nav-link" to={"/shop"}>Shop</NavLink>
                                                </li>
                                                <li class="nav-item">
                                                    <NavLink className="nav-link" to={"/product-details"}>Product</NavLink>
                                                </li>
                                                <li class="nav-item">
                                                    <NavLink className="nav-link" to={"/cart"}>Cart</NavLink>
                                                </li>
                                                <li class="nav-item">
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
 
export default Footer;