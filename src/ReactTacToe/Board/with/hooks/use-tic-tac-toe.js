import { useState } from 'react';

const blankBoard = ['', '', '', '', '', '', '', '', ''];

const rows = [[0, 1, 2], [3, 4, 5], [6, 7, 8]];
const columns = [[0, 3, 6], [1, 4, 7], [2, 5, 8]];
const diagonals = [[0, 4, 8], [2, 4, 6]];
const possibleWinningTileSets = rows.concat(columns).concat(diagonals);

const getWinningTilesForSet = (board, a, b, c) => {
  const winningTiles = [false, false, false, false, false, false, false, false, false];
  if(board[a] === board[b] && board[b] === board[c] && board[a] !== '') {
    winningTiles[a] = true;
    winningTiles[b] = true;
    winningTiles[c] = true;
  }

  return winningTiles;
};

export default (initialBoard = blankBoard) => {
  const [ board, setBoard ] = useState(initialBoard);
  const [ mark, setMark ] = useState('X');

  const swapTurns = () => setMark(prev => prev === 'X' ? 'O' : 'X');

  const select = position => {
    const newBoard = [...board];
    newBoard[position] = mark;
    setBoard(newBoard);
    swapTurns();
  };

  const winningTiles = possibleWinningTileSets.reduce((prev, set) => {
    const winningTiles = getWinningTilesForSet(board, ...set);
    return prev.map((t, i) => t || winningTiles[i]);
  }, [false, false, false, false, false, false, false, false, false])
    
  return { board, select, winningTiles };
}