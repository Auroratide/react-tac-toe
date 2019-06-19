import ReactTacToe from './ReactTacToe';
import withHooks from './with/hooks';
import withMobx from './with/mobx';

export const HooksReactTacToe = withHooks(ReactTacToe);
export const MobxReactTacToe = withMobx(ReactTacToe);
