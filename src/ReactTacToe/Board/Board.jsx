import React from 'react';
import PropTypes from 'prop-types';
import * as Styled from './Board.styles';

const Board = ({ board }) =>
  <Styled.Container>
    {board.map(({ mark, select, isWinning }, i) =>
      <Styled.Tile
        key={i}
        data-testid={`tile-${i}`}
        className={isWinning ? 'highlight' : ''}
        onClick={select}
      >
        {mark}
      </Styled.Tile>
    )}
  </Styled.Container>;

Board.propTypes = {
  board: PropTypes.arrayOf(PropTypes.shape({
    mark: PropTypes.string,
    select: PropTypes.func,
    isWinning: PropTypes.bool
  }))
};

export default Board;