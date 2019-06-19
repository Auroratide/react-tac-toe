import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  width: 80vmin;
  height: 80vmin;
  margin: auto;
  user-select: none;
`;

export const Tile = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16vmin;

  &:nth-child(3n - 1) {
    border-left: 0.25rem solid #333;
    border-right: 0.25rem solid #333;
  }

  &:nth-child(n + 4):not(:nth-child(n + 7)) {
    border-top: 0.25rem solid #333;
    border-bottom: 0.25rem solid #333;
  }

  &.highlight {
    color: #5ebf36;
  }
`;