import React from 'react';
import useTicTacToe from './use-tic-tac-toe';

export default Component => ({ initialBoard }) => {
  const { board, reset } = useTicTacToe(initialBoard);

  return <Component board={board} reset={reset} />;
};