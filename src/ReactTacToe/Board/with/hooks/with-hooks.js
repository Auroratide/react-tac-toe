import React from 'react';
import useTicTacToe from './use-tic-tac-toe';

export default Component => ({ initialBoard }) => {
  const { board, select, winningTiles } = useTicTacToe(initialBoard);

  return <Component board={board} select={select} winningTiles={winningTiles} />;
};