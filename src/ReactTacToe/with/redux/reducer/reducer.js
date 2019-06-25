export const INITIAL_STATE = {
  board: new Array(9).fill(''),
  mark: 'X'
};

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
const reduceReset = () => INITIAL_STATE;

const INITIALIZE = 'TicTacToe::INITIALIZE';
export const initialize = marks => ({
  type: INITIALIZE,
  marks
});
const reduceInitialize = (state, payload) => ({
  ...state,
  board: payload.marks
});

export default (state = INITIAL_STATE, { type, ...payload }) => {
  switch(type) {
    case SELECT:
      return reduceSelect(state, payload);
    case RESET:
      return reduceReset();
    case INITIALIZE:
      return reduceInitialize(state, payload);
    default:
      return state;
  }
};