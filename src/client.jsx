import React from 'react';
import { render } from 'react-dom';
import ReactTacToe from './ReactTacToe';

window.onload = () => render(<ReactTacToe />, document.getElementById('root'));