import React, { useState } from 'react';
import './App.css';

// JSX: Sintaxe de XML dentro do JavaScript

import Header from './Header';

function App() {
  const [counter, setCounter] = useState(0);

  function handleButtonClicl() {
    setCounter(counter + 1);
  }
  
  return (
    <div>
      <Header title={`Contador: ${counter}`} />

      <h1>{counter}</h1>
      <button type="button" onClick={handleButtonClicl}>Aumentar</button>
    </div>
  );
}

export default App;
