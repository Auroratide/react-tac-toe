import React from 'react';
import PropTypes from 'prop-types';
import * as Styled from './Board.styles';

const Board = ({ board, select, winningTiles }) =>
  <Styled.Container>
    {board.map((mark, i) =>
      <Styled.Tile
        key={i}
        data-testid={`tile-${i}`}
        className={winningTiles[i] ? 'highlight' : ''}
        onClick={mark === '' ? () => select(i) : null}
      >
        {mark}
      </Styled.Tile>
    )}
  </Styled.Container>;

Board.propTypes = {
  board: PropTypes.arrayOf(PropTypes.string),
  select: PropTypes.func,
  winningTiles: PropTypes.arrayOf(PropTypes.bool)
};

export default Board;