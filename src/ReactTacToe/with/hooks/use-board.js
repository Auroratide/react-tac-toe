import { useState } from 'react';

const blankBoard = ['', '', '', '', '', '', '', '', ''];

const rows = [[0, 1, 2], [3, 4, 5], [6, 7, 8]];
const columns = [[0, 3, 6], [1, 4, 7], [2, 5, 8]];
const diagonals = [[0, 4, 8], [2, 4, 6]];
const possibleWinningTileSets = rows.concat(columns).concat(diagonals);

const getWinningTilesForSet = (tiles, a, b, c) => {
  const winningTiles = [false, false, false, false, false, false, false, false, false];
  if(tiles[a] === tiles[b] && tiles[b] === tiles[c] && tiles[a] !== '') {
    winningTiles[a] = true;
    winningTiles[b] = true;
    winningTiles[c] = true;
  }

  return winningTiles;
};

export default (initialBoard = blankBoard) => {
  const [ tiles, setTileMarks ] = useState(initialBoard);

  const markTile = (position, mark) => {
    const clone = [...tiles];
    clone[position] = mark;
    setTileMarks(clone);
  };

  const winningTiles = possibleWinningTileSets.reduce((prev, set) => {
    const winningTiles = getWinningTilesForSet(tiles, ...set);
    return prev.map((t, i) => t || winningTiles[i]);
  }, [false, false, false, false, false, false, false, false, false]);

  const clear = () => setTileMarks(blankBoard);

  return {
    tiles,
    markTile,
    winningTiles,
    clear
  };
};