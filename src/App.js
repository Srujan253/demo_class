import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import ShoppingPage from './ShoppingPage';
import CartPage from './CartPage';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Shopping Page</Link>
            </li>
            <li>
              <Link to="/cart">Cart</Link>
            </li>
          </ul>
        </nav>
        </div>
        <Routes>
          <Route path="/cart" element={<CartPage />} />
          <Route path="/" element={<ShoppingPage />} />
        </Routes>
      
    </Router>
  );
}

export default App;
