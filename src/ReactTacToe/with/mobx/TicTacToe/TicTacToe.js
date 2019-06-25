import { reaction } from 'mobx';

export default class TicTacToe {
  constructor(board, firstPlayer, secondPlayer) {
    this.board = board;
    this.firstPlayer = firstPlayer;
    this.secondPlayer = secondPlayer;
  }

  start() {
    this.currentPlayer = this.firstPlayer;
    this._nextTurn();
  }

  _nextTurn() {
    reaction(() => this.currentPlayer.selectedBoardPosition, (position, r) => {
      if(!this.board.isMarked(position)) {
        r.dispose();
        
        if(!this.board.hasWinner() && !this.board.isFilled()) {
          this.board.mark(position, this.currentPlayer.mark);
          this._swapPlayers();
          this._nextTurn();
        }
      }
    });
    
    this.currentPlayer.startTurn();
  }
  
  _swapPlayers() {
    this.currentPlayer = this.currentPlayer === this.firstPlayer ?
      this.secondPlayer :
      this.firstPlayer;
  }
}