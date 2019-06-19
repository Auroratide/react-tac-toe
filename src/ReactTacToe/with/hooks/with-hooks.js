import React from 'react';
import useTicTacToe from './use-tic-tac-toe';

export default Component => ({ initialBoard }) => {
  const board = useTicTacToe(initialBoard);

  return <Component board={board} />;
};