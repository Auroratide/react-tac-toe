const BLANK_BOARD = new Array(9).fill('');
export const initialState = (initialBoard = BLANK_BOARD) => ({
  board: initialBoard,
  mark: 'X'
});

const SELECT = 'TicTacToe::SELECT';
export const select = position => ({
  type: SELECT,
  position
});
const reduceSelect = (state, payload) => {
  if(state.board[payload.position] === '') {
    const board = [...state.board];
    board[payload.position] = state.mark;
    
    const mark = state.mark === 'X' ? 'O' : 'X';
    
    return { board, mark };
  } else {
    return state;
  }
};

const RESET = 'TicTacToe::RESET';
export const reset = () => ({ type: RESET });
const reduceReset = () => initialState();

export default (state, { type, ...payload }) => {
  switch(type) {
    case SELECT:
      return reduceSelect(state, payload);
    case RESET:
      return reduceReset();
    default:
      return state;
  }
};