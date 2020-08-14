import React from 'react';

export const CategoryWidget = () => {
    return (
        <div className="widget catagory mb-50">
            <h6 className="widget-title mb-30">Catagories</h6>
            <div className="catagories-menu">
                <ul>
                    <li className="active"><a href="#">Chairs</a></li>
                    <li><a href="#">Beds</a></li>
                    <li><a href="#">Accesories</a></li>
                    <li><a href="#">Furniture</a></li>
                    <li><a href="#">Home Deco</a></li>
                    <li><a href="#">Dressings</a></li>
                    <li><a href="#">Tables</a></li>
                </ul>
            </div>
        </div> );
}