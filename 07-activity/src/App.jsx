import { useState } from 'react';
import Sidebar from './components/Sidebar';

import './App.css';

function App() {
  const [isShowingSidebar, setIsShowingSidebar] = useState(true);
  return (
    <section className='section'>
      {isShowingSidebar && <Sidebar />}
      <main>

        <button onClick={() => setIsShowingSidebar(!isShowingSidebar)}>
          {isShowingSidebar ? 'Hide Sidebar' : 'Show Sidebar'}
        </button>
        <h1>Main content</h1>
      </main>

    </section>
  );
}

export default App;
