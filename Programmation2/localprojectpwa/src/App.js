import React from 'react';
import logo from './img/pwa.png';
import './App.css';
import BoutonInstallPWA from "./components/BoutonInstallPWA";
import DemoJSONLocal from './components/DemoJSONLocal';

function App() {
  return (
    <div className="App">
      <BoutonInstallPWA/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" width="300 px" height="100 px" />
        <p>
          Hello PWA World !
        </p>

      </header>
        <DemoJSONLocal/>
    </div>
  );
}

export default App;
