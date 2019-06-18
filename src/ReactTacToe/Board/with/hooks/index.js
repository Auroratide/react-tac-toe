import React, { useState } from 'react';

export default Component => () => {
  const [ board, setBoard ] = useState(['', '', '', '', '', '', '', '', '']);
  const [ mark, setMark ] = useState('X');

  const swapTurns = () => setMark(prev => prev === 'X' ? 'O' : 'X');

  const select = position => {
    const newBoard = [...board];
    newBoard[position] = mark;
    setBoard(newBoard);
    swapTurns();
  };

  return <Component board={board} select={select} />;
};