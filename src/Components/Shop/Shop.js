import React, { useState } from 'react';
import "./Shop.css";
import fakeData from "../../fakeData";
import Product from '../Product/Product';
import Cart from '../Cart/Cart';


const Shop = () => {
    const first10 = fakeData.slice(0, 10);
    const [products, setProducts] = useState(first10);
    const [cart, setCart] = useState([]);

    const handleAddPd = (product) => {

        const newCart = [...cart, product];
        setCart(newCart);
    }
    return (
        <div className="container">
            <div className="shop_container">

                <div className="product_view">
                    {products.map(pd => <Product handleAddPd={handleAddPd} product={pd} className="productList"></Product>)}
                </div>

                <div className="card_purchase">
                    <Cart cart={cart}></Cart>
                </div>
            </div>

            <div className="pagination">
                <h4>pagination</h4>
            </div>
        </div>
    );
};

export default Shop;