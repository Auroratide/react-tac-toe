import ReactTacToe from './ReactTacToe';
import withHooks from './with/hooks';
import withMobx from './with/mobx';
import withReducer from './with/reducer';

export const HooksReactTacToe = withHooks(ReactTacToe);
export const MobxReactTacToe = withMobx(ReactTacToe);
export const ReducerReactTacToe = withReducer(ReactTacToe);
