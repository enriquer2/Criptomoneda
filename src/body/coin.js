import React, { Component } from 'react';
import database from '../data/data.json';

class Coin extends Component {
  constructor(props){
    super();

  }
  render() {
    return (
      <div>
        <ul>
          {
            database.map(function(cripto){
              return (
                <li>
                  {cripto.name} - {cripto.symbol}
                  <br />
                  Volume: {cripto.volume} Market Cap: {cripto.market_cap}
                  <br />
                  Value:
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

export default Coin;