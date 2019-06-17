import React from 'react';
import {
  render,
  fireEvent,
  cleanup
} from '@testing-library/react';
import Board from '.';

describe('Board', () => {
  it('renders', () => {
    expect(() => render(<Board />)).not.toThrow();
  });

  describe('when the board is empty', () => {
    let wrapper;
    const clickSquare = n => fireEvent.click(wrapper.getByTestId(`tile-${n}`));
    const squareMark = n => wrapper.getByTestId(`tile-${n}`).textContent;

    it('should populate the first square clicked with an X', () => {
      wrapper = render(<Board />);
      expect(squareMark(0)).toEqual('');

      clickSquare(0);
      expect(squareMark(0)).toEqual('X');
    });
  });

  afterEach(cleanup);
});