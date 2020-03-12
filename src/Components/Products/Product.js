import React from 'react';
import './Product.css'

const Product = (props) => {
    console.log(props.product)
    return (
        <div className = "feature">
            <h2>Key : {props.product.key}</h2>
            <h3>Category : {props.product.category}</h3>
            <h4>{props.product.name}</h4>
            <h5> WholeSale Price is: {props.product.wholePrice}.tk </h5>
        </div>
    );
};

export default Product;