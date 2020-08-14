import React from 'react';
import { CategoryWidget } from './CategoryWidget';
// import {BrandWidget} from './BrandWidget';
import {ColorWidget} from './ColorWidget';
import {PriceWidget} from './PriceWidget';

export const ShopSidebar = () => {
    return ( 
    <div class="shop_sidebar_area">
        <CategoryWidget/>
        {/* <BrandWidget/> */}
        <ColorWidget/>
        <PriceWidget/>
    </div> );
}