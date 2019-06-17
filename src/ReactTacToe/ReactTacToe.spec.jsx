import React from 'react';
import { render, cleanup } from '@testing-library/react';
import ReactTacToe from '.';

describe('ReactTacToe', () => {
  it('renders', () => {
    expect(() => render(<ReactTacToe />)).not.toThrow();
  });

  afterEach(cleanup);
});