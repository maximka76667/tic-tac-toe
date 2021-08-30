import React from 'react';
import Cell from './Cell'

function Board(props: object) {

  const [cells, setCells] = React.useState(Array<string | null>(9).fill(null))
  const [xIsNext, setXIsNext] = React.useState(true);
  const [status, setStatus] = React.useState('');
  const [isEnd, setIsEnd] = React.useState(false);
  const [isBotActive, setIsBotActive] = React.useState(false);
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

  function renderCell(i: number) {
    return <Cell onClick={() => handleClick(i)} value={cells[i]} />
  }

  function handleClick(i: number) {
    checkEndGame();
    if(cells[i]) {
      return;
    }
    if(isEnd) {
      return endGame();
    }
    const newCells = cells.slice();
    newCells[i] = xIsNext ? 'X' : 'O';
    console.log('Ход', xIsNext ? 'X' : 'O', i);
    setCells(newCells);
    setXIsNext(!xIsNext);
  }

  function bot() {
    if(isEnd) {
      return endGame();
    }
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
      if(!isEnd) {
        let botTurnNumber;
        do {
          checkEndGame();
          botTurnNumber = generateNumber();
          handleClick(botTurnNumber);
          console.log('Рандом', botTurnNumber);
          console.log(isEnd + ' IsEnd');
        } while (cells[botTurnNumber] !== null && !isEnd);
      }
    }
  }

  function generateNumber() {
    return Math.floor(Math.random() * 9);
  }

  function checkEndGame() {
    checkWin();
    for(let i = 0; i < cells.length; i++) {
      if(!cells[i]) {
        return;
      }
    }
    endGame();
  }

  function checkWin() {
    const winner = calculateWinner();
    if (winner) {
      endGame();
      setStatus('Winner: ' + winner);
    } else if(isEnd && winner === null) {
      setStatus('Winner: Draw');
    } else {
      setStatus('Next player: ' + (xIsNext ? 'X' : 'O'));
    }
  }

  function calculateWinner() {
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
        return cells[a];
      }
    }
    return null;
  }

  function endGame() {
    console.log('Game Over!');
    setXIsNext(true);
    setIsEnd(true);
    setIsBotActive(false);
  }

  function restartGame() {
    setCells(Array(9).fill(null));
    setIsEnd(false);
    setXIsNext(true);
    setIsBotActive(true);
  }

  React.useEffect(() => {
    checkEndGame();
  }, [cells])

  React.useEffect(() => {
    if(isBotActive) {
      bot();
    }
  }, [isBotActive, cells])

  React.useEffect(() => {
    if(isEnd) {
      endGame();
    }
  }, [isEnd])

  React.useEffect(() => {
    setIsBotActive(true);
  }, [])

  return (
    <>
      <p>{ status }</p>
      <p>{ isEnd.toString() }</p>
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
      <button className="reset-button" onClick={restartGame}>Reset</button>
    </>
  )
}

export default Board;