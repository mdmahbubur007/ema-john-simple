import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const Product = (props) => {
    // console.log(props)
    const {name,seller,wholePrice,stock,key, img} = props.product
    return (
        <div className="product">
            <div className="image">
                <img src={img} alt=""/> 
            </div>
            <div className = "feature">
                <h5><Link to= { "/product/" + key}>{name}></Link> </h5>
                  <br/>          
                <p><small>by: {seller}</small></p>            
                <h4> Price : {wholePrice}.tk </h4>  
                <p><small>Only {stock} left in Stock - Order soon. </small></p>         
            {props.showAddToCart === true && <button class = "mainButton" onClick={()=>props.handleAddProduct(props.product)}><FontAwesomeIcon icon={faShoppingCart}/>  Add to Cart </button>}
            </div>
        </div>
    );
};

export default Product;