import React from 'react';
import Board from './Board';
import { Route, Switch, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <main className="content">
        <Switch>
          <Route path="/" exact>
            <Link to="/single">1 player</Link>
            <Link to="/multi">2 Players</Link>
          </Route>
          <Route path="/single">
            <div className="game">
              <Board isPlayWithBot={true} />
            </div>
          </Route>
          <Route path="/multi">
            <div className="game">
              <Board isPlayWithBot={false} />
            </div>
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
