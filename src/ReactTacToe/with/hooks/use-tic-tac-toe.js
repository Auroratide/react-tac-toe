import useBoard from './use-board';
import useTurnTracker from './use-turn-tracker';

export default (initialBoard) => {
  const boardState = useBoard(initialBoard);
  const turnTracker = useTurnTracker();

  const select = position => {
    boardState.markTile(position, turnTracker.mark);
    turnTracker.swapTurns();
  };

  const anyWinning = boardState.winningTiles.some(w => w);

  const board = boardState.tiles.map((mark, i) => ( {
    mark,
    select: !anyWinning && mark === '' ? () => select(i) : null,
    isWinning: boardState.winningTiles[i]
  } ));

  const reset = () => {
    boardState.clear();
    turnTracker.reset();
  };

  return { board, reset };
}