import React from 'react';
import ReactDOM from 'react-dom';
import Api_call from './api_call';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Api_call />, div);
  ReactDOM.unmountComponentAtNode(div);
});
