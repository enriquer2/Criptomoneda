import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import Header from './header/header';
import Body from './body/body';
import Footer from './footer/footer';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Header name="Finametrix Company" />, document.getElementById('header'));
ReactDOM.render(<Body />, document.getElementById('body'));
ReactDOM.render(<Footer name={ 'Enrique Cases' } />, document.getElementById('footer'));
serviceWorker.unregister();
