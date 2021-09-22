import { useState } from 'react';

import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div data-test="component-app">
      <h1 data-test="counter-display">
        The counter is <span data-test="counter-count">{count}</span>
      </h1>
      <button data-test="increment-button" onClick={() => setCount(count + 1)}>
        Increase Counter
      </button>
    </div>
  );
}

export default App;
