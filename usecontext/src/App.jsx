
import { useState, createContext } from 'react';
import './App.css';
import Layout from './components/Layout';

export const userContext = createContext();

function App() {
  const [userInfo, setUserInfo] = useState({ name: "ferret", email: "ferret@mail.com" });

  return (
    <userContext.Provider value={{ userInfo, setUserInfo }}>
      <p style={{ padding: ".6rem", fontSize: "18px" }}>
        Los datos del usuario viven en App. Los necesitamos en el componente
        UserInfo, que se renderiza en un nivel interior.
        <br />
        <b>
          <code>App/Layout/Container/OtherStuff/UserInfo</code>
        </b>
        <br />
        Con useContext no necesitamos pasar props para que los componentes
        accedan a los datos
      </p>
      <pre>Lvl: 1</pre>
      <Layout />

    </userContext.Provider>
  );
}

export default App;
