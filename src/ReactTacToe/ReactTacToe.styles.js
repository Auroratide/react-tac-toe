import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 1em;
`;

export const ButtonContainer = styled.div`
  text-align: center;
`;

export const Button = styled.button`
  position: relative;
  font-size: 1.5em;
  background: #FFF;
  border: 0.125em solid #000;
  box-shadow: 0.125em 0.125em #000;
  cursor: pointer;
  padding: 0.125em 0.5em;

  &:hover {
    background: #EEE;
  }

  &:active {
    box-shadow: none;
    left: 0.125em;
    top: 0.125em;
  }
`;