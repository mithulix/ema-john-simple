import React from 'react';
import "./Product.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faShoppingCart} from "@fortawesome/free-solid-svg-icons";


const Product = (props) => {
    const { name, img, seller, price, stock } = props.product;

    return (
        <div className="product">
            <div className="image">
                <img src={img} alt="no image" />
            </div>
            <div>
                <h4>{name}</h4>
                <div className="extra_info">
                    <p><small>by: </small>{seller}</p>
                    <p>price: <b>$ {price}</b></p>
                    <p>only: {stock} left</p>
                    <button onClick={()=> props.handleAddPd(props.product)}>
                        <FontAwesomeIcon icon={faShoppingCart} />&nbsp;&nbsp; Add to Cart
                    </button>
                </div>
            </div>
        </div>

    );
};

export default Product;