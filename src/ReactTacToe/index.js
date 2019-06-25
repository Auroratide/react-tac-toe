import ReactTacToe from './ReactTacToe';
import withHooks from './with/hooks';
import withMobx from './with/mobx';
import withRedux from './with/redux';

export const HooksReactTacToe = withHooks(ReactTacToe);
export const MobxReactTacToe = withMobx(ReactTacToe);
export const ReduxReactTacToe = withRedux(ReactTacToe);
