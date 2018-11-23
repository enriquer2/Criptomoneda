import React from 'react';
import ReactDOM from 'react-dom';
import General_info from './general_info';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<General_info />, div);
  ReactDOM.unmountComponentAtNode(div);
});
