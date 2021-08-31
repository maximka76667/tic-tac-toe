import React from "react";

interface BotInteface {
  handleClick: (e: number) => void | null,
  isBotActive: boolean,
  turn: string,
  lines: Array<Array<number>>,
  cells: Array<string>
}

function Bot({ handleClick, turn, cells, lines, isBotActive }: BotInteface) {

  function generateNumber() {
    if(isBotActive) {
      let botTurnNumber;
      do {
        botTurnNumber = Math.floor(Math.random() * 9);
      } while (cells.includes('') && cells[botTurnNumber] !== '');
      return botTurnNumber;
    }
    return -1;
  }

  function playTurn(i: number) {
    if(isBotActive) {
      handleClick(i);
      console.log('Рандом ' + i);
    }
  }

  function bot(isActive: boolean) {
    if(isActive) {
      if(turn === 'O') {
        for (let i = 0; i < lines.length; i++) {
          const [a, b, c] = lines[i];
          if (cells[a] && cells[a] === cells[b] && !cells[c]) {
            console.log('Бот', c);
            return handleClick(c);
          }
          if(cells[b] && cells[b] === cells[c] && !cells[a]) {
            console.log('Бот', a);
            return handleClick(a);
          }
          if(cells[a] && cells[a] === cells[c] && !cells[b]) {
            console.log('Бот', b);
            return handleClick(b);
          }
        }
        return playTurn(generateNumber());
      }
    }
  }

  React.useEffect(() => {
    bot(isBotActive);
    // eslint-disable-next-line
  }, [isBotActive, cells])

  return (
    <></>
  )
}

export default Bot;