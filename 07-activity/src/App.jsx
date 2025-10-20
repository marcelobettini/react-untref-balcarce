import { useState, Activity } from 'react';
import TabButton from './components/TabButton';

import './App.css';
import Home from './components/Home';
import Contact from './components/Contact';

function App() {
  const [activeTab, setActiveTab] = useState('home');
  return (
    <>
      <nav style={{ display: 'flex' }}>
        <TabButton isActive={activeTab === 'home'}
          onClick={() => setActiveTab("home")}>
          HOME
        </TabButton>
        <TabButton isActive={activeTab === 'contact'}
          onClick={() => setActiveTab("contact")}>
          CONTACT
        </TabButton>
      </nav>
      <hr />

      <>
        {activeTab === 'home' && <Home />}
        {activeTab === 'contact' && <Contact />}
      </>
    </>
  );
}

export default App;
