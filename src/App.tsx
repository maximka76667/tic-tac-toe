import React, { FormEvent } from 'react';
import Board from './Board';

function App() {
  return (
    <div className="App">
      <main className="content">
        <div className="game">
          <Board />
        </div>
      </main>
    </div>
  );
}

export default App;
