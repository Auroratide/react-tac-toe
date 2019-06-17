import React from 'react';
import * as Styled from './Board.styles';

const Board = ({ board, select }) =>
  <Styled.Container>
    {board.map((mark, i) =>
      <Styled.Tile key={i} data-testid={`tile-${i}`} onClick={() => select(i)}>{mark}</Styled.Tile>
    )}
  </Styled.Container>;

export default Board;