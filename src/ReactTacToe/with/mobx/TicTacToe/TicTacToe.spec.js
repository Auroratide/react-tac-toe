import Board from '../Board';
import Player from '../Player';
import TicTacToe from '.';

describe('TicTacToe Model', () => {
  let board;
  let player1;
  let player2;
  let game;

  beforeEach(() => {
    board = Board.blank();
    player1 = new Player('X');
    player2 = new Player('O');
  
    game = new TicTacToe(board, player1, player2);
  });

  describe('taking turns', () => {
    it('should let the first player take they\'re turn first', () => {
      game.start();
      player1.select(0);
  
      expect(board.tiles[0]).toEqual('X');
    });
  
    it('should let the second player take they\'re turn after the first player', () => {
      game.start();
      player1.select(0);
      player2.select(1);
  
      expect(board.tiles[1]).toEqual('O');
    });
  
    it('should not allow the first player to take two consecutive turns', () => {
      game.start();
      player1.select(0);
      player1.select(1);
  
      expect(board.tiles[1]).not.toEqual('X');
    });

    it('should not allow a player to select a tile that has already been selected', () => {
      game.start();
      player1.select(0);
      player2.select(0);

      expect(board.tiles[0]).toEqual('X');
    });
  });

  describe('ending the game', () => {
    it('should not allow additional selections after someone has won the game', () => {
      game.start();
      player1.select(0);
      player2.select(3);
      player1.select(1);
      player2.select(4);
      player1.select(2);
      
      player2.select(5);

      expect(board.tiles[5]).toEqual('');
    });
  });
});