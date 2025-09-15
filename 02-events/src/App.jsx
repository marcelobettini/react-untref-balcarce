import { useState } from 'react';
import './App.css';

function App() {
  let [count, setCount] = useState(10);
  console.count("Se monta App");
  const handleAdd = () => setCount(count + 1);
  return (
    <>
      <h1>Eventos en React</h1>

      <h3>{count}</h3>
      <button onClick={handleAdd}>Suma 1</button>
    </>
  );
}

export default App;
