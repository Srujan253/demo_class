// import React, { useState } from 'react';

// const products = [
//   { id: 1, name: 'Product 1', price: 20, img: 'product1.jpg' },
//   { id: 2, name: 'Product 2', price: 30, img: 'product2.jpg' },
//   // Add more products as needed
// ];

// const ShoppingPage = () => {
//   const [cart, setCart] = useState([]);

//   const addToCart = (product) => {
//     setCart([...cart, product]);
//   };

//   return (
//     <div>
//       <h2>Shopping Page</h2>
//       {products.map((product) => (
//         <div key={product.id}>
//           <img src={product.img} alt={product.name} />
//           <p>{product.name}</p>
//           <p>${product.price}</p>
//           <button onClick={() => addToCart(product)}>Add to Cart</button>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ShoppingPage;
import './App.css';

import React, { useState } from 'react';
// import img1 from './assest/img1.png';
// import img2 from './assest/img2.png';
// import img3 from './assest/img3.png';

const ShoppingPage = () => {
  const [products, setProducts] = useState([
    { id: 1, name: 'Product 1', price: 10 },
    { id: 2, name: 'Product 2', price: 15 },
    { id: 3, name: 'Product 3', price: 20 },
    
  ]);

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);
  };

  const cartTotal = cart.reduce((total, item) => total + item.price, 0);

  return (
    <div className='bg' >
      <center>
      <h1>Shopping Cart</h1>
      <div>
        <h2>Products</h2>
        <ul>
          {products.map((product) => (
            <p key={product.id}>
              <img src={product.img} alt={product.name} /><br/>
              {product.name} - ${product.price}
              <button onClick={() => addToCart(product)}>Add to Cart</button>
            </p>
          ))}
        </ul>
      </div>

      <div>
        <h2>Cart</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <ul>
            {cart.map((item) => (
              <p key={item.id} >
                {item.name} - ${item.price}
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </p>
            ))}
          </ul>
        )}
        <p>Total: ${cartTotal}</p>
      </div>
      </center>
    </div>
  );
};

export default ShoppingPage;


