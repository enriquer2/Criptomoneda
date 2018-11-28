import React, { Component } from 'react';
import General_info from './general_info';
import Coin from './coin';
import Api_call from './api_call';

class Body extends Component {
  render() {
    return (
      <div>
        <div>
          <p>Daily Prices and Volumes for Digital Currency</p>
          <span />
          <p>Market Code: USD</p>
          <span />
          <p>Market Name: United States Dollar</p>
        </div>
        <General_info name="2018-11-28" />
        <Coin />
        <Api_call />
      </div>
    );
  }
}

export default Body;
