import React from 'react';
import Board from './Board';
import { Route, Switch } from 'react-router-dom';
import Menu from './Menu';

function App() {
  return (
    <div className="App">
      <main className="content">
        <Switch>
          <Route path="/" exact>
            <Menu />
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
