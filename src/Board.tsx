import React from 'react';
import { useHistory } from 'react-router';
import Bot from './Bot';
import Cell from './Cell'

interface BoardInterface {
  isPlayWithBot: boolean,
}

function Board(props: BoardInterface) {
  let history = useHistory();
  const [cells, setCells] = React.useState(Array<string>(9).fill(''))
  // const [xIsNext, setXIsNext] = React.useState(true);
  const [turn, setTurn] = React.useState<string>('');
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

  function handleClick(i: number) {
    if(cells[i] || isEnd) {
      return;
    }
    checkEndGame();
    const newCells = cells.slice();
    newCells[i] = turn;
    console.log('Ход', turn, i);
    setCells(newCells);
    changeTurn(turn);
  }

  function changeTurn(turn: string) {
    if(turn === 'X') {
      setTurn('O');
    } else if(turn === 'O') {
      setTurn('X')
    }
  }

  // function bot() {
  //   if(turn === 'O') {
  //     for (let i = 0; i < lines.length; i++) {
  //       const [a, b, c] = lines[i];
  //       if (cells[a] && cells[a] === cells[b] && !cells[c]) {
  //         console.log('Бот', c, '1');
  //         return handleClick(c);
  //       }
  //       if(cells[b] && cells[b] === cells[c] && !cells[a]) {
  //         console.log('Бот', a, '2');
  //         return handleClick(a);
  //       }
  //       if(cells[a] && cells[a] === cells[c] && !cells[b]) {
  //         console.log('Бот', b, '3');
  //         return handleClick(b);
  //       }
  //     }
  //       let botTurnNumber;
  //       do {
  //         checkEndGame();
  //         botTurnNumber = generateNumber();
  //         handleClick(botTurnNumber);
  //         console.log('Рандом', botTurnNumber);
  //         console.log(isEnd + ' IsEnd');
  //       } while (cells[botTurnNumber] !== null ?? !isEnd);
  //     }
  //   }
  // }

  function checkEndGame() {
    if(isWinner()) return win();
    if(isDraw()) return draw();
    setStatus('Turn: ' + turn);
  }

  function isWinner(): boolean {
    return calculateWinner() !== '';
  }

  function win(): void {
    endGame(calculateWinner());
  }

  function isDraw(): boolean {
    for(let i = 0; i < cells.length; i++) {
      if(!cells[i]) {
        return false;
      }
    }
    return true;
  }

  function draw(): void {
    endGame('draw');
  }

  function calculateWinner(): string {
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
        return cells[a];
      }
    }
    return '';
  }

  function endGame(gameStatus: string): void {
    setIsBotActive(false);
    console.log('Game Over!');
    setTurn('');
    setIsEnd(true);
    if(gameStatus === 'draw') {
      return setStatus('Draw!');
    }
    if(gameStatus === 'X' || 'O') {
      return setStatus('Winner: ' + gameStatus);
    }
  }

  function restartGame() {
    
    setCells(Array(9).fill(''));
    setIsEnd(false);
    setTurn('X');
    setStatus('');
    setIsBotActive(true);
  }

  function goToMenu() {
    history.push("/");
  }

  React.useEffect(() => {
    checkEndGame();

    // eslint-disable-next-line
  }, [cells])

  React.useEffect(() => {
    restartGame();
  }, []);

  return (
    <>
      <p>{ status }</p>
      <p>{ isEnd.toString() }</p>
      <div className="board">
        {
          Array(9).fill('').map((c, i) => {
            return <Cell onClick={() => handleClick(i)} key={i} value={cells[i]} />
          })
        }
      </div>
      { props.isPlayWithBot && <Bot handleClick={handleClick} cells={cells} lines={lines} isBotActive={isBotActive} turn={turn} />}
      <button className="reset-button" onClick={restartGame}>Reset</button>
      <button className="menu-button" onClick={goToMenu}>Menu</button>
    </>
  )
}

export default Board;