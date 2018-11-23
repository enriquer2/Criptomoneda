import React, { Component } from 'react';
import General_info from './general_info';
import Coin from './coin';
import Api_call from './api_call';

class Body extends Component {
  render() {
    return (
      <div>
        <General_info name="2018-11-22" />
        <Coin />
        <Api_call />
      </div>
    );
  }
}

export default Body;
