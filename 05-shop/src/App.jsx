import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router';
import Home from './Home';
import './App.css';


import { CartContext } from './cart/CartContext';
import Cart from './cart/pages/Cart';

function App() {
  const [cart, setCart] = useState([]);

  return (
    <BrowserRouter>
      <CartContext.Provider value={{ cart, setCart }}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='cart' element={<Cart />} />
        </Routes>
      </CartContext.Provider>
    </BrowserRouter>

  );
}

export default App;
