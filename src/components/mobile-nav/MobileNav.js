import React from 'react';

const MobileNav = () => {
    return (
        <React.Fragment>
            <div dangerouslySetInnerHTML={{__html: "<!-- Mobile Nav (max width 767px)-->"}} />
            <div className="mobile-nav">
                <div dangerouslySetInnerHTML={{__html: "<!-- Navbar Brand -->"}} />
                <div className="amado-navbar-brand">
                    <a href="index.html"><img src={"img/core-img/logo.png"} alt="" /></a>
                </div>
                <div dangerouslySetInnerHTML={{__html: "<!-- Navbar Toggler -->"}} />
                <div className="amado-navbar-toggler">
                    <span></span><span></span><span></span>
                </div>
            </div> 
        </React.Fragment> 
    );
}
 
export default MobileNav;