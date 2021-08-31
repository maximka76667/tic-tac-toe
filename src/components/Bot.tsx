import React from "react";

interface BotInteface {
  handleClick: (e: number) => void | null,
  turn: string,
  lines: Array<Array<number>>,
  cells: Array<string>,
}

function Bot({ handleClick, turn, cells, lines }: BotInteface) {
  function generateNumber(): number {
    let botTurnNumber: number;
    do {
      botTurnNumber = Math.floor(Math.random() * 9);
    } while (cells.includes('') && cells[botTurnNumber] !== '');
    return botTurnNumber;
  }

  function playTurn(i: number): void {
    console.log('Рандом ' + i);
    handleClick(i);
  }

  function bot(): void | null {
    if(turn === 'O') {
      for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (cells[a] && cells[a] === cells[b] && !cells[c]) {
          return handleClick(c);
        }
        if(cells[b] && cells[b] === cells[c] && !cells[a]) {
          return handleClick(a);
        }
        if(cells[a] && cells[a] === cells[c] && !cells[b]) {
          return handleClick(b);
        }
      }
      return playTurn(generateNumber());
    }
  }

  React.useEffect(() => {
    bot();
    // eslint-disable-next-line
  }, [cells])

  return (
    <></>
  )
}

export default Bot;