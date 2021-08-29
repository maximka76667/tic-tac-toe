import React, { FormEvent } from 'react';
import Cell from './Cell'

function Board(props: object) {

  const [cells, setCells] = React.useState(Array<string | null>(9).fill(null))
  const [xIsNext, setXIsNext] = React.useState(true);
  const [status, setStatus] = React.useState('');

  function renderCell(i: number) {
    return <Cell onClick={() => handleClick(i)} value={cells[i]} />
  }

  function handleClick(i: number) {
    const newCells = cells.slice();
    console.log('Ход', xIsNext ? 'X' : 'O', i);
    if(cells[i]) {
      return;
    }
    if(calculateWinner(cells)) {
      return handleWin();
    }
    newCells[i] = xIsNext ? 'X' : 'O';
    setCells(newCells);
    setXIsNext(!xIsNext);
  }

  function calculateWinner(cells: Array<string | null>) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
        return cells[a];
      }
    }
    return null;
  }

  function bot() {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    if(!xIsNext) {
      for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (cells[a] && cells[a] === cells[b] && !cells[c]) {
          console.log('Бот', c, '1');
          return handleClick(c);
        }
        if(cells[b] && cells[b] === cells[c] && !cells[a]) {
          console.log('Бот', a, '2');
          return handleClick(a);
        }
        if(cells[a] && cells[a] === cells[c] && !cells[b]) {
          console.log('Бот', b, '3');
          return handleClick(b);
        }
      }
      let botTurnNumber;
      do {
        botTurnNumber = generateNumber();
        handleClick(botTurnNumber);
        console.log('Рандом', botTurnNumber)
      } while (cells[botTurnNumber] !== null);
    }
  }

  function generateNumber() {
    return Math.floor(Math.random() * 9);
  }
  
  function handleWin() {
    const winner = calculateWinner(cells);
    if (winner) {
      setStatus('Winner: ' + winner);
    } else {
      setStatus('Next player: ' + (xIsNext ? 'X' : 'O'));
    }
  }

  React.useEffect(() => {
    handleWin();
    bot();
  }, [cells])

  return (
    <>
      <p>{ status }</p>
      <div className="board">
        { renderCell(0) }
        { renderCell(1) }
        { renderCell(2) }
        { renderCell(3) }
        { renderCell(4) }
        { renderCell(5) }
        { renderCell(6) }
        { renderCell(7) }
        { renderCell(8) }
      </div>
    </>
  )
}

export default Board;