import React from 'react';

const Product = (props) => {
    
    return ( 
        <div className="product">
            <div className={props.logo}></div>
            <div className="title">{props.title}</div>
            <div className="description">{props.description}</div>
            <div className="learn_more bluecolored"><a href={props.website}>{props.learn_more}</a></div>
            <div className="line"></div>
        </div>
     );
}
 
export default Product;