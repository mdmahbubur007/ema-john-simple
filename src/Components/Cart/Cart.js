import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const cart = props.cart;
    const total= cart.reduce((total, prd) => total + prd.price, 0)
    
    let shipping =0;
    if(total>35){
        shipping=0;
    }
    else if(total>15){
        shipping = 4.99
    }
    else if (total>0){
        shipping = 12.99;
    }
    const tax = (total/15);
    const totalPrice = total+tax+shipping;
    return (
        <div className = "cart">
            <h4>Ordered Summary : </h4>
            <p>Items Ordered : {cart.length} </p>
            <p>Total Amount : {total.toFixed(2)}</p>
            <p> <small> Shipping Cost : {shipping.toFixed(2)}</small> </p>
            <p> <small> Tax : {tax.toFixed(2)}</small></p>
            <p>Total Price : {totalPrice.toFixed(2)}</p>
        </div>
    );
};

export default Cart;