import React from 'react';
import logo from './logo.png';
import './App.css';

const API_URL = process.env.REACT_APP_API_URL || 'undefined';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p> Api url: {API_URL} </p>
      </header>
    </div>
  );
}

export default App;
