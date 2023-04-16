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
    useEffect(() => {
        const storedCart = getShoppingCart();
        let savedCart = [];
        // step :1
        for (const id in storedCart) {
            // step : 2 : get the product by using id;
            const addedProduct = products.find(product => product.id === id)
            if (addedProduct) {
                // step : 3: get quantity of the product;
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                // console.log(addedProduct);

                // step : 4: add product to the saved Cart;
                savedCart.push(addedProduct);
            }
        }
        // step : 5: set the savedCart to setCart;
        setCart(savedCart);
    }, [products]);

    const handleAddToCart = (product) => {
        // cart.push (product)

        // const newCart = [...cart, product];
        let newCart = [];

        const exists = cart.find(pd => pd.id === product.id);
        if(!exists){
            product.quantity = 1;
            newCart = [...cart , product]
        }
        else{
            exists.quantity = exists.quantity + 1;
            const remaining = cart.filter(pd => pd.id !== product.id);
            newCart = [... remaining, exists];  
        }

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