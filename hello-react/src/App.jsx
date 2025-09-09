import SubTitle from "./components/SubTitle";
import Title from "./components/Title";

function App() {
  const title = "Hola Mundo desde React";
  const num_a = 9;
  const num_b = 3;
  return (
    <>
      <h1>Acá va la variable <code>title</code>: {title.toUpperCase()}</h1>
      <p style={{ fontSize: '24px' }}>Resultado de sumar {num_a} + {num_b} = {num_a + num_b}</p>

      <header>

        <SubTitle />
        <Title />
      </header>
    </>
  );
}

export default App;
