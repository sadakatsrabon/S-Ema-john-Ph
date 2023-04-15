import React, { useEffect, useState } from 'react';
import './shop.css';
import Proudct from '../Projuct/Proudct';

const Shop = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);
    return (
        <div className='shop-container'>
            {/* Products container  */}
            <div className="products-container">
                {
                    products.map(product => <Proudct
                        key={product.id}
                        product={product}
                    ></Proudct>)
                }
            </div>
            {/* Carts container  */}
            <div className="carts-container">
                <h3>Order summury</h3>
            </div>
        </div>
    );
};

export default Shop;