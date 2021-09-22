import { useState } from 'react';

import './App.css';

function App() {
  return (
    <div data-test="component-app">
      <h1 data-test="counter-display">The counter is 1</h1>
      <button data-test="increment-button">Increase Counter</button>
    </div>
  );
}

export default App;
