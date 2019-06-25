import { decorate, observable } from 'mobx';

const rows = [[0, 1, 2], [3, 4, 5], [6, 7, 8]];
const columns = [[0, 3, 6], [1, 4, 7], [2, 5, 8]];
const diagonals = [[0, 4, 8], [2, 4, 6]];
const possibleWinningTileSets = rows.concat(columns).concat(diagonals);

class Board {
  constructor(tiles) {
    this.tiles = tiles;
  }

  mark(position, marker) {
    this.tiles[position] = marker;
  }

  isMarked(position) {
    return this.tiles[position] !== '';
  }

  winningTiles() {
    return possibleWinningTileSets.reduce((prev, set) => {
      const m = n => this.tiles[set[n]];
      if(m(0) === m(1) && m(1) === m(2) && m(1) !== '') {
        prev[set[0]] = true;
        prev[set[1]] = true;
        prev[set[2]] = true;
      }

      return prev;
    }, [false, false, false, false, false, false, false, false, false]);
  }

  hasWinner() {
    return this.winningTiles().some(isWinner => isWinner);
  }

  isFilled() {
    return this.tiles.every(mark => mark !== '');
  }

  static blank() {
    return new Board(['', '', '', '', '', '', '', '', '']);
  }
}

export default decorate(Board, {
  tiles: observable
});