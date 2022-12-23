import React from 'react';
import "./Cart.css";

const Cart = (props) => {
    const cart  = props.cart;
    console.log(cart);
    const total = cart.reduce((total, prd)=> total + prd.price, 0);

    let shippingCost = 0;
    if(total > 30){shippingCost = 3.35}
    else if(total < 30){ shippingCost = 0};

    const tax = (total / 10).toFixed(2);
    const grandTotal = (total + shippingCost + Number(tax)).toFixed(2);

    const formatNumber = num => {
        const precision = num.toFixed(2);
        return Number(precision);
    }

    return (
        <div>
            <h3 className="order">Order Summary</h3>
            <p>Items Ordered: {cart.length}</p>
            <p>Product Price: $ {formatNumber(total)}</p>
            <p>Shipping Cost: $ {shippingCost}</p>
            <p><small>Tax + VAT: </small>{tax} </p>
            <p>Total Price: $ {grandTotal}</p>
            <button className="review_order">Review</button>
        </div>
    );
};

export default Cart;