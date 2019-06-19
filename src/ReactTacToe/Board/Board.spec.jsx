import React from 'react';
import {
  render,
  cleanup
} from '@testing-library/react';
import Board from '.';

describe('Board', () => {
  it('renders', () => {
    expect(() => render(<Board />)).not.toThrow();
  });

  afterEach(cleanup);
});