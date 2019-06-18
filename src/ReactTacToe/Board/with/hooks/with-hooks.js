import React from 'react';
import useTicTacToe from './use-tic-tac-toe';

export default Component => () => {
  const { board, select } = useTicTacToe();

  return <Component board={board} select={select} />;
};