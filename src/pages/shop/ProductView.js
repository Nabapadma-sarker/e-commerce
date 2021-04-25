import React from 'react';
export const ProductView = ({listGridView, listOrGrid}) => {
    return ( 
        <div class="total-products">
            <p>Showing 1-8 0f 25</p>
            <div class="view d-flex">
                <a href="#" className={(listOrGrid == "grid"? 'active':'')} onClick={(e)=>{e.preventDefault();listGridView('grid')}}><i class="fa fa-th-large" aria-hidden="true"></i></a>
                <a href="#" className={(listOrGrid == "list"? 'active':'')} onClick={(e)=>{e.preventDefault();listGridView('list')}}><i class="fa fa-bars" aria-hidden="true"></i></a>
            </div>
        </div> );
}