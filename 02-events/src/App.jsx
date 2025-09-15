import Counter from './component/Counter';
import './App.css';

function App() {


  return (
    <>
      <h1>Eventos en React</h1>

      <Counter />
      <hr />
      <Counter initCount={10} />
      <hr />
      <Counter initCount={-4} />
    </>
  );
}

export default App;
