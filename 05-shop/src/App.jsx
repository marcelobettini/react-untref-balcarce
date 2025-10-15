import { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router';
import HomeLayout from './HomeLayout';
import './App.css';


import { CartContext } from './cart/CartContext';
import Cart from './cart/pages/Cart';
import ProductDetail from './products/pages/ProductDetail';
import ProductList from './products/pages/ProductList';
import HomeHero from './shared/components/HomeHero';
import Test from './products/components/Test';

function App() {
  const [cart, setCart] = useState([]);

  return (
    <BrowserRouter>
      <CartContext.Provider value={{ cart, setCart }}>
        <Routes>
          <Route path='/' element={<HomeLayout />}>
            <Route path='test' element={<Test />}>
              <Route path='interno' element={<h3 className='text-center danger p-4 bg-primary text-white'>Soy hijo de Test, nieto de HomeLayout</h3>} />
            </Route>
            <Route index element={<HomeHero />} />
            <Route path='cart' element={<Cart />} />
            <Route path='products' element={<ProductList />} />
            <Route path='product/:id' element={<ProductDetail />} />
            <Route path='about' element={<h1>Soy el About</h1>} />
            <Route path='*' element={<h1>No encontrado dentro de ruta /home</h1>} />
            {/* catch all route - 404 */}
          </Route>
          <Route path='*' element={<Navigate to={"/"} />} />

        </Routes>
      </CartContext.Provider>
    </BrowserRouter>

  );
}

export default App;
