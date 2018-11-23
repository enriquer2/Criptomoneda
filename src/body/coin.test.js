import React from 'react';
import ReactDOM from 'react-dom';
import Coin from './coin';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Coin />, div);
  ReactDOM.unmountComponentAtNode(div);
});
