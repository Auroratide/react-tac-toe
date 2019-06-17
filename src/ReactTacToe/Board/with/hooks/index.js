import React, { useState } from 'react';

export default Component => () => {
  const [ board, setBoard ] = useState(['', '', '', '', '', '', '', '', '']);

  const select = position => {
    const newBoard = [...board];
    newBoard[position] = 'X';
    setBoard(newBoard);
  };

  return <Component board={board} select={select} />;
};