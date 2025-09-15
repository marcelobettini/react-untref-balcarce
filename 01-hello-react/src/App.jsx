import CharacterCard from "./components/CharacterCard";
import { results as characters } from "./data/data.json";
import './App.css';
function App() {


  return (
    <>
      <h1>Lista de usuarios</h1>
      <section className="main-container">
        {characters.map((character) => (
          // <p>{character.name}</p>
          <CharacterCard character={character} key={character.id} />
        ))}
      </section>
    </>
  );
}

export default App;
