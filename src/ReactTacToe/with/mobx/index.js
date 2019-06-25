import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';
import Board from './Board';
import Player from './Player';
import TicTacToe from './TicTacToe';

const createGame = (initialBoard) => {
  const board = initialBoard ? new Board(initialBoard) : Board.blank();
  const xPlayer = new Player('X');
  const oPlayer = new Player('O');
  const game = new TicTacToe(board, xPlayer, oPlayer);
  game.start();

  return game;
}

export default Component => observer(({ initialBoard }) => {
  const [ game, setGame ] = useState(() => createGame(initialBoard));

  const winningTiles = game.board.winningTiles();

  const board = game.board.tiles.map((mark, i) => ({
    mark,
    select: () => game.currentPlayer.select(i),
    isWinning: winningTiles[i]
  }));

  const reset = () => setGame(createGame());

  return <Component board={board} reset={reset} />;
});