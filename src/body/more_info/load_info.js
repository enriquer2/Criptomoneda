import React, { Component } from 'react';
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
        <ul>
          {
            this.state.dbName.map(function(cripto){
              return (
                <li>
                  Date: {cripto.date}
                  <br />
                  Values:
                  <div>
                    Open: {cripto.open} High: {cripto.high} Low: {cripto.low} Close: {cripto.close}
                  </div>
                  <br></br>
                </li>
              )
            })
          }
        </ul>
      </div>
    );
  }
}

export default Load_info;
