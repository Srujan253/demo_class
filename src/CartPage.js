import React from 'react';

const CartPage = ({ cart }) => {
  return (
    <div>
      <h2>Cart Page</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cart.map((product) => (
            <li key={product.id}>
              {product.name} - ${product.price}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CartPage;
