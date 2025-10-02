import { useState } from 'react';
import './App.css';
import useGetData from './products/hooks/useGetData';
import ProductList from './products/pages/ProductList';
import { Container } from 'react-bootstrap';
import CartSummary from './products/components/CartSummary';
function App() {

  const { loading, error, data } = useGetData("/products");

  const [cart, setCart] = useState([]);



  return (
    <Container>
      <CartSummary products={cart} />
      {loading ? <p>Carganding...</p>
        :
        error ? <p>{error.message}</p>
          :
          // prop drilling: pasamos una prop por ProductList solo para llegar a ProductItem
          <ProductList products={data} setCart={setCart} />
      }
    </Container>
  );
}

export default App;
