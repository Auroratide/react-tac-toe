import { useState } from 'react';

export default () => {
  const [ mark, setMark ] = useState('X');
  const swapTurns = () => setMark(prev => prev === 'X' ? 'O' : 'X');
  const reset = () => setMark('X');

  return { mark, swapTurns, reset };
};