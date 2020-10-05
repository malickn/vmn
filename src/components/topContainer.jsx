import React from 'react';
import Products from './products';
import Whatwedo from './whatwedo';

const TopContainer = () => {
    return ( 
        <section className="container">
            <div className="bg-top-right"></div>
            <Whatwedo />
            <div className="bg-left-what-to-do"></div>
            <Products />
        </section>
     );
}
 
export default TopContainer;