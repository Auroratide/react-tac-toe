import React from 'react';
import PropTypes from 'prop-types';
import Board from './Board';
import * as Styled from './ReactTacToe.styles';

const ReactTacToe = ({ board, reset }) =>
  <Styled.Container>
    <Board board={board} />
    <Styled.ButtonContainer>
      <Styled.Button onClick={reset}>Reset</Styled.Button>
    </Styled.ButtonContainer>
  </Styled.Container>;

ReactTacToe.propTypes = {
  board: Board.propTypes.board,
  reset: PropTypes.func
};

export default ReactTacToe;