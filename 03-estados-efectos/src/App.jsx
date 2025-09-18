import { useState, useEffect } from "react";
import { Card } from "react-bootstrap";

const url = 'https://fakestoreapi.com/products';
function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setProducts(data);
      });
  }, []);

  return (
    <>
      <h1>Efectos secundarios y variables de estado</h1>
      {products.length === 0 ?
        <h3>Carganding...</h3>
        :
        products.map(p =>
          <Card key={p.id} className="py-3 mb-3">
            <Card.Header>{p.title}</Card.Header>
          </Card>
        )
      }


    </>
  );
}
export default App;
