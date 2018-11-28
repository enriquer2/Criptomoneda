import React, { Component } from 'react';
var btc_data = require('../../data/btc.json');
var eth_data = require('../../data/eth.json');
var xrp_data = require('../../data/xrp.json');


class Load_info extends Component {
  constructor(props){
    super(props);

    let dbName = this.props.name;

    this.state = {
      dbName: dbName
    }

  }
  render() {
    return (
      <h3>{this.state.dbName} Info</h3>
    );
  }
}

export default Load_info;
