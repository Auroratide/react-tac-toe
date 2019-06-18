import { useState } from 'react';

export default () => {
  const [ board, setBoard ] = useState(['', '', '', '', '', '', '', '', '']);
  const [ mark, setMark ] = useState('X');

  const swapTurns = () => setMark(prev => prev === 'X' ? 'O' : 'X');

  const select = position => {
    const newBoard = [...board];
    newBoard[position] = mark;
    setBoard(newBoard);
    swapTurns();
  };

  return { board, select };
}