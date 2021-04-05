import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const totalAge = props.ages.reduce((sum, age) => sum + age, 0)
    return (
        <div className="cart">
            <h2>Selected Officer: {props.selectedOfficers}</h2>
            <h3>Total Age: {totalAge}</h3>
        </div>
    );
};

export default Cart;