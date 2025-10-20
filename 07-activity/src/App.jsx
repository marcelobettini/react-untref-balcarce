import { useState, Activity } from 'react';
import TabButton from './components/TabButton';
import { routes } from './constants/constants';

import './App.css';
import Home from './components/Home';
import Contact from './components/Contact';

function App() {
  const [activeTab, setActiveTab] = useState(routes.home);
  return (
    <>
      <nav style={{ display: 'flex' }}>
        <TabButton isActive={activeTab === routes.home}
          onClick={() => setActiveTab(routes.home)}>
          HOME
        </TabButton>
        <TabButton isActive={activeTab === routes.contact}
          onClick={() => setActiveTab(routes.contact)}>
          CONTACT
        </TabButton>
      </nav>
      <hr />

      <>
        <Activity mode={activeTab === routes.home ? 'visible' : 'hidden'}>
          <Home />
        </Activity>
        <Activity mode={activeTab === routes.contact ? 'visible' : 'hidden'}>
          <Contact />
        </Activity>
      </>
    </>
  );
}

export default App;
