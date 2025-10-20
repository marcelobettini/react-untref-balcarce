import { useState, Activity } from 'react';
import Sidebar from './components/Sidebar';

import './App.css';

function App() {
  const [isShowingSidebar, setIsShowingSidebar] = useState(false);
  return (
    <section className='section'>
      <Activity mode={isShowingSidebar ? 'visible' : 'hidden'}>
        <Sidebar />
      </Activity>
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
