import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    // console.log(props)
    return (
        <div className="product">
            <div className="image">
                <img src={props.product.img} alt=""/> 
            </div>
            <div className = "feature">
                <h5>{props.product.name}</h5>
                  <br/>          
                <p><small>by: {props.product.seller}</small></p>            
                <h4> Price : {props.product.wholePrice}.tk </h4>  
                <p><small>Only {props.product.stock} left in Stock - Order soon. </small></p>         
                <button onClick={()=>props.handleAddProduct(props.product)}><FontAwesomeIcon icon={faShoppingCart}/>  Add to Cart </button>
            </div>
        </div>
    );
};

export default Product;