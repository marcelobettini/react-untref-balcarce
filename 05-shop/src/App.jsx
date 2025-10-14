import { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router';
import Home from './Home';
import './App.css';


import { CartContext } from './cart/CartContext';
import Cart from './cart/pages/Cart';
import ProductDetail from './products/pages/ProductDetail';
import { TypeH1 } from 'react-bootstrap-icons';

function App() {
  const [cart, setCart] = useState([]);

  return (
    <BrowserRouter>
      <CartContext.Provider value={{ cart, setCart }}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='cart' element={<Cart />} />
          <Route path='product/:id' element={<ProductDetail />} />
          {/* catch all route - 404 */}
          <Route path='*' element={<Navigate to={"/"} />} />

        </Routes>
      </CartContext.Provider>
    </BrowserRouter>

  );
}

export default App;
