import React, { Component } from 'react';
import Update_button from './update_button';

class Api_call extends Component {
  constructor() {
    super();
    this.state = { values: [] };
  }

  componentDidMount() {
    fetch('https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_DAILY&symbol=BTC&market=CNY&apikey=demo')
      .then(response => response.json())
      .then(json => this.setState({ values: json.data }));
  }

  render() {
    return (
      <div>
        <h3>To update data values</h3>
        <Update_button />
      </div>
    );
  }
}

export default Api_call;
