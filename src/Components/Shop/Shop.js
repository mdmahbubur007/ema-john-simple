import React, { useState, useEffect } from 'react';
import fakeData from '../../fakeData';
import './Shop.css';
import Product from '../Products/Product';
import Cart from '../Cart/Cart';
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';
import { Link } from 'react-router-dom';

const Shop = () => {
    //console.log(fakeData)
    const first10 = fakeData.slice(0,10);
    const [products, setProducts] = useState(first10); 
    const [cart, setCart] = useState([]); 
useEffect(() => {
    const savedCart = getDatabaseCart();
    const ProductKeys = Object.keys(savedCart);
    const previousKeys = ProductKeys.map(existingKey => {
        const product = fakeData.find(pd => pd.key === existingKey)
        product.quantity = savedCart[existingKey];
        return product;
    })
    setCart(previousKeys);
},[])

    
    const handleAddProduct = (product) =>{
        const toBeAdded = product.key;
        //console.log("Product Added", product);
        const sameProduct = cart.find(pd=> pd.key === toBeAdded)
        let count = 1;
        let newCart ;
        if(sameProduct){
            count = sameProduct.quantity + 1;
            sameProduct.quantity = count;
            const others = cart.filter(pd => pd.key !== toBeAdded)
            newCart = [ ...others, sameProduct];
        }
        else{
            product.quantity = 1;
            newCart = [...cart, product]
        }
        setCart(newCart) 
        addToDatabaseCart(product.key, count);
    }           
    return (
        <div className="shop-container">
            <div className="product-container">
            
                {
                    products.map(pd=> <Product
                        key = {pd.key}
                        handleAddProduct = {handleAddProduct}
                        showAddToCart = {true} 
                        product ={pd}
                        ></Product>)
                }
            
            </div>
            <div className="cart-container">
                <Cart cart = {cart}>
                <Link to="/review"><button className = "mainButton"> Review Order</button></Link>   
                </Cart>   
            </div>
            
        </div>
    );
};

export default Shop;