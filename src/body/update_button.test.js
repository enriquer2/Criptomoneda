import React from 'react';
import ReactDOM from 'react-dom';
import Update_button from './update_button';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Update_button />, div);
  ReactDOM.unmountComponentAtNode(div);
});
