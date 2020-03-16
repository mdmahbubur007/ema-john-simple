import React from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData';
import Product from '../Products/Product';

const ProductDetails = () => {
    const {key} = useParams()
    const product = fakeData.find(pd => pd.key === key)
    console.log(product)
    return (
        <div>
            <h1>{key} Details is coming Soon................</h1>
            <Product showAddToCart = {false} product ={product}></Product>)}  
        </div>
    );
};

export default ProductDetails;