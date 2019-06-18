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
    
    it('should alternate turns between X and O', () => {
      wrapper = render(<Board />);

      clickSquare(0);
      expect(squareMark(0)).toEqual('X');

      clickSquare(1);
      expect(squareMark(1)).toEqual('O');

      clickSquare(2);
      expect(squareMark(2)).toEqual('X');

      clickSquare(3);
      expect(squareMark(3)).toEqual('O');
    });

    it('should not allow the same square to be clicked more than once', () => {
      wrapper = render(<Board />);

      clickSquare(0);
      expect(squareMark(0)).toEqual('X');

      clickSquare(0);
      expect(squareMark(0)).toEqual('X');
    });
  });

  describe('when the board is complete', () => {
    let wrapper;
    const isHighlighted = n => wrapper.getByTestId(`tile-${n}`).classList.contains('highlight');
    
    it('should highlight the tiles containing winning marks', () => {
      const initialBoard = ['X', 'O', '', 'X', 'O', '', 'X', '', ''];
      wrapper = render(<Board initialBoard={initialBoard} />);

      expect(isHighlighted(0)).toBe(true);
      expect(isHighlighted(3)).toBe(true);
      expect(isHighlighted(6)).toBe(true);

      expect(isHighlighted(1)).toBe(false);
      expect(isHighlighted(2)).toBe(false);
      expect(isHighlighted(4)).toBe(false);
      expect(isHighlighted(5)).toBe(false);
      expect(isHighlighted(7)).toBe(false);
      expect(isHighlighted(8)).toBe(false);
    });
  });

  afterEach(cleanup);
});