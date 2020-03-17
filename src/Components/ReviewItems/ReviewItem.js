import React from 'react';
import "./ReviewItem.css";

const ReviewItem = (props) => {
    console.log(props)
    const {name, quantity, img, key, price} = props.product;
    return (
        <div className="Product">
            <div className="image">
                <img src={img} alt=""/> 
             </div>
             <div className="feature">
                <h5>{name}</h5>
                <h3>Review Quantity : {quantity}</h3>
                <h3> <small> Price: {price}</small></h3>
                <br/>
                <button 
                className="mainButton"
                onClick = {()=>props.removeProduct(key)}
                >Remove</button> 
            </div> 
        </div>
    );
};

export default ReviewItem;