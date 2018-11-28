import React, { Component } from 'react';
import './coin.css';
import database from '../data/data.json';
import More_info from './more_info/more_info';

class Coin extends Component {
  constructor(props){
    super();

  }
  render() {
    return (
      <div class="coin_list">
        {
          database.map(function(cripto){
            return (
              <ul>
                <div class="row">
                  <h4>
                    {cripto.name} - {cripto.symbol}
                  </h4>
                </div>
                <div class="coin_info">
                  <div class="row">
                    <strong>Volume</strong>: {cripto.volume}
                  </div>
                  <div class="row">
                    <strong>Market Cap</strong>: {cripto.market_cap}
                  </div>
                  <div class="row">
                    Last values:
                  </div>
                  <div class="coin_info_values">
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
                  <div class="row">
                    <More_info name={cripto.symbol}/>
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

export default Coin;