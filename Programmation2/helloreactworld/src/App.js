import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    //  Outer Element (Englobant)
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        Hello World !
      </header>
    </div>
  );
}

export default App;
