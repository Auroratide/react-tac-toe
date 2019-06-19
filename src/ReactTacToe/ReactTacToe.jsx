import React from 'react';
import Board from './Board';

const ReactTacToe = ({ board }) =>
  <Board board={board} />;

ReactTacToe.propTypes = {
  board: Board.propTypes.board
};

export default ReactTacToe;