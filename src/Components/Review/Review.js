import React, { useEffect, useState } from 'react';
import { getDatabaseCart, removeFromDatabaseCart, processOrder } from '../../utilities/databaseManager';
import fakeData from '../../fakeData';
import ReviewItem from '../ReviewItems/ReviewItem';
import './Review.css'
import Cart from '../Cart/Cart';
import happyImage from '../../images/giphy.gif';
const Review = () => {
    const [cart, setCart]= useState([])
    const [orderPlaced, setOrderPlaced] = useState(false)

    const handlePlaceOrder = () =>{
            setCart([]);
            setOrderPlaced(true)
            processOrder()
    }
    const removeProduct = (ProductKey)=>{
        // console.log("remove clicked", ProductKey);
        const newCart = cart.filter(pd=>pd.key !== ProductKey);
        setCart(newCart);
        removeFromDatabaseCart(ProductKey);
    }
    useEffect(()=>{
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart);
        const cartProducts = productKeys.map(key => {
            const product = fakeData.find (pd => pd.key === key);
            product.quantity = savedCart[key];
            return product;        
        })
        // console.log(cartProducts)
        setCart(cartProducts);
    },[])
    let thankYou;
    if (orderPlaced)
        {thankYou = <img src={happyImage} alt=""/>}
    return (
        <div className="Main-Container">
            <div className="product-container">
                {
                    cart.map(pd => <ReviewItem 
                    removeProduct = {removeProduct} 
                    key = {pd.key}
                    product = {pd}>                             
                    </ReviewItem>)
                }
                {thankYou}
            </div>
            <div className="cart-container">
                <Cart cart = {cart}>
                     <button onClick = {handlePlaceOrder} className = "mainButton">Place Order</button>
                </Cart>
            </div>           
        </div>
    );
};

export default Review;