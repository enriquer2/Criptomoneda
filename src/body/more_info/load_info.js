import React, { Component } from 'react';
import './load_info.css';
var btc_data = require('../../data/btc.json');
var eth_data = require('../../data/eth.json');
var xrp_data = require('../../data/xrp.json');


class Load_info extends Component {
  constructor(props){
    super(props);

    let dbName = this.props.name;
    let whichDbLoad;

    if (dbName == 'BTC') {
      whichDbLoad = btc_data;
    }
    if (dbName == 'ETH') {
      whichDbLoad = eth_data;
    }
    if (dbName == 'XRP') {
      whichDbLoad = xrp_data;
    }

    this.state = {
      dbName: whichDbLoad
    }

  }
  render() {
    return (
      <div>
        {
          this.state.dbName.map(function(cripto){
            return (
              <ul>
                <div class="older_info">
                  <div class="row">
                    <strong>Date</strong>: {cripto.date}
                  </div>
                  <div class="row">
                    Values:
                  </div>
                  <div class="older_info_values">
                    <div class="row">
                      <strong>Open</strong>: {cripto.open}
                    </div>
                    <div class="row">
                      <strong>High</strong>: {cripto.high}
                    </div>
                    <div class="row">
                      <strong>Low</strong>: {cripto.low}
                    </div>
                    <div class="row">
                      <strong>Close</strong>: {cripto.close}
                    </div>
                  </div>
                </div>
              </ul>
            )
          })
        }
      </div>
    );
  }
}

export default Load_info;
