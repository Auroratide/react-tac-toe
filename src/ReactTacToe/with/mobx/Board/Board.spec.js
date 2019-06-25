import Board from '.';

describe('Board model', () => {
  describe('winning tiles', () => {
    it('should return all false when there are no winning tiles', () => {
      const board = new Board([
        'X', 'O', 'X',
        'X', 'O', 'X',
        'O', 'X', 'O'
      ]);

      expect(board.winningTiles()).toEqual(new Array(9).fill(false));
      expect(board.hasWinner()).toBe(false);
    });

    it('should return true for each tile in a column that belongs to a three-in-a-row', () => {
      const board = new Board([
        'X', 'O', '',
        'X', 'X', 'O',
        'X', 'O', 'O'
      ]);

      expect(board.winningTiles()).toEqual([
        true, false, false,
        true, false, false,
        true, false, false
      ]);
      expect(board.hasWinner()).toBe(true);
    });

    it('should return true for each tile in a row that belongs to a three-in-a-row', () => {
      const board = new Board([
        'X', 'X', 'X',
        'O', 'O', '',
        'X', 'O', 'O'
      ]);

      expect(board.winningTiles()).toEqual([
        true,  true,  true,
        false, false, false,
        false, false, false
      ]);
      expect(board.hasWinner()).toBe(true);
    });

    it('should return true for each tile in a diagonal that belongs to a three-in-a-row', () => {
      const board = new Board([
        'X', 'O', '',
        'X', 'X', 'O',
        'O', 'O', 'X'
      ]);

      expect(board.winningTiles()).toEqual([
        true,  false, false,
        false, true,  false,
        false, false, true
      ]);
      expect(board.hasWinner()).toBe(true);
    });
  });
});