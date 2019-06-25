import { decorate, observable, action } from 'mobx';

class Player {
  constructor(mark) {
    this.mark = mark;
    this.selectedBoardPosition = null;
  }

  startTurn() {
    this.selectedBoardPosition = null;
  }

  select(position) {
    this.selectedBoardPosition = position;
  }
}

export default decorate(Player, {
  selectedBoardPosition: observable,
  select: action
});