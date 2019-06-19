import { useState } from 'react';

const blankBoard = ['', '', '', '', '', '', '', '', ''];

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

export default (initialBoard = blankBoard) => {
  const [ tileMarks, setTileMarks ] = useState(initialBoard);
  const [ mark, setMark ] = useState('X');

  const swapTurns = () => setMark(prev => prev === 'X' ? 'O' : 'X');

  const select = position => {
    const newBoard = [...tileMarks];
    newBoard[position] = mark;
    setTileMarks(newBoard);
    swapTurns();
  };

  const winningTiles = possibleWinningTileSets.reduce((prev, set) => {
    const winningTiles = getWinningTilesForSet(tileMarks, ...set);
    return prev.map((t, i) => t || winningTiles[i]);
  }, [false, false, false, false, false, false, false, false, false]);

  const anyWinning = winningTiles.some(w => w);

  const board = tileMarks.map((mark, i) => ( {
    mark,
    select: !anyWinning && mark === '' ? () => select(i) : null,
    isWinning: winningTiles[i]
  } ));

  const reset = () => {
    setTileMarks(blankBoard);
    setMark('X');
  };

  return { board, reset };
}