import React, { useEffect, useState } from 'react';
import './shop.css';
import Proudct from '../Projuct/Proudct';
import Cart from '../Cart/Cart';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);
    useEffect( ()=> {
        const storedCart = getShoppingCart();
        // step :1
        for (const id in storedCart){
            // step : 2 : get the product by using id;
            const addedProduct = products.find(product =>product.id === id)
            // step : 3: get quantity of the product;
            const quantity = storedCart[id];
            addedProduct.quantity = quantity;
            console.log(addedProduct);
        } 
    },[products]);

    const handleAddToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
        addToDb(product.id)
    }
    
    return (
        <div className='shop-container'>
            {/* Products container  */}
            <div className="products-container">
                {
                    products.map(product => <Proudct
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    ></Proudct>)
                }
            </div>
            {/* Carts container  */}
            <div className="carts-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;