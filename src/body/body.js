import React, { Component } from 'react';
import './body.css';
import General_info from './general_info';
import Coin from './coin';
import Api_call from './api_call';

class Body extends Component {
  render() {
    return (
      <div>
        <div class="static_text">
          <div class="row">
            <div class="col-md-12">
              <p>Daily Prices and Volumes for Digital Currency</p>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12">
              <p>Market Code: <strong>USD</strong></p>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12">
              <p>Market Name: <strong>United States Dollar</strong></p>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="row update_data">
            <div class="col-md-8">
              <General_info name="2018-11-28" />
            </div>
            <div class="col-md-4">
              <Api_call />
            </div>
          </div>
        </div>
        <Coin />
      </div>
    );
  }
}

export default Body;
