import React from 'react';
import './Product.css';

const Product = ({ product }) => {
    const { img, name, seller, ratings, price } = product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h6 className='product-name'>{name}</h6>
                <p>Price: ${price}</p>
                <p>Manufacturar : {seller}</p>
                <p>Rating : {ratings} Stars</p>
            </div>
            <button className='btn-cart'>Add To Cart</button>
        </div>
    );
};

export default Product;