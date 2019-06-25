import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { select, reset, initialize } from './reducer';
import withProvider from './with-provider';

const rows = [[0, 1, 2], [3, 4, 5], [6, 7, 8]];
const columns = [[0, 3, 6], [1, 4, 7], [2, 5, 8]];
const diagonals = [[0, 4, 8], [2, 4, 6]];
const possibleWinningTileSets = rows.concat(columns).concat(diagonals);

const getWinningTilesForSet = (tileMarks, a, b, c) => {
  const winningTiles = [false, false, false, false, false, false, false, false, false];
  if(tileMarks[a] === tileMarks[b] && tileMarks[b] === tileMarks[c] && tileMarks[a] !== '') {
    winningTiles[a] = true;
    winningTiles[b] = true;
    winningTiles[c] = true;
  }

  return winningTiles;
};

export default Component => withProvider(({ initialBoard }) => {
  const marks = useSelector(state => state.board);
  const dispatch = useDispatch();

  useEffect(() => {
    if(initialBoard)
      dispatch(initialize(initialBoard));
  }, []);

  const winningTiles = possibleWinningTileSets.reduce((prev, set) => {
    const winningTiles = getWinningTilesForSet(marks, ...set);
    return prev.map((t, i) => t || winningTiles[i]);
  }, [false, false, false, false, false, false, false, false, false]);

  const anyWinning = winningTiles.some(w => w);

  const board = marks.map((mark, i) => ({
    mark,
    select: !anyWinning ? () => dispatch(select(i)) : null,
    isWinning: winningTiles[i]
  }));

  return <Component board={board} reset={() => dispatch(reset())} />
});