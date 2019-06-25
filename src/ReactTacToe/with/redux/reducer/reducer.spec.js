import reducer, {
  INITIAL_STATE,
  select,
  reset,
  initialize
} from '.';

describe('Tic Tac Toe reducer', () => {
  let state;

  beforeEach(() => {
    state = Object.assign({}, INITIAL_STATE);
  });

  describe('select', () => {
    it('should mark the selected tile with the current mark', () => {
      expect(reducer(state, select(0))).toMatchObject({
        board: ['X', '', '', '', '', '', '', '', ''],
      });
    });

    it('should switch turns with every select', () => {
      state = reducer(state, select(0));
      expect(state).toMatchObject({
        mark: 'O'
      });

      state = reducer(state, select(1));
      expect(state).toMatchObject({
        board: ['X', 'O', '', '', '', '', '', '', ''],
        mark: 'X'
      });
    });

    it('should not allow selection of an already marked slot', () => {
      state.board[0] = 'X';
      state.mark = 'O';

      expect(reducer(state, select(0))).toMatchObject({
        board: ['X', '', '', '', '', '', '', '', ''],
        mark: 'O'
      });
    });
  });

  describe('reset', () => {
    it('should clear the board and reset the marker', () => {
      state.board = ['X', 'O', 'X', '', 'O', '', '', '', ''];

      expect(reducer(state, reset())).toEqual(INITIAL_STATE);
    });
  });

  describe('initialize', () => {
    it('should initialize the board with the given state', () => {
      const marks = ['X', 'O', 'X', '', '', 'O', 'X', 'O', ''];

      expect(reducer(state, initialize(marks))).toMatchObject({
        board: marks
      });
    });
  });
});