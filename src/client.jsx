import 'regenerator-runtime/runtime';

import React from 'react';
import { render } from 'react-dom';
import { HooksReactTacToe as ReactTacToe } from './ReactTacToe';

window.onload = () => render(<ReactTacToe />, document.getElementById('root'));