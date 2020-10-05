import React from 'react';
import Product from './product';
import productslist from './productslist';

const Products = () => {
    const listItems = productslist.map(item => 
        <Product 
            brand={item.brand} 
            logo={item.logo}
            title={item.title}
            description={item.description} 
            learn_more={item.learn_more}
            key={item.brand}
            website={item.website}
        />
    );
    return(
        <div className="what-to-do-products-container" id="our_products">
            <div className="products-list">
                { listItems }
            </div>
        </div>
    )
};
 
export default Products;