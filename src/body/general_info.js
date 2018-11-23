import React, { Component } from 'react';

class General_info extends Component {
  constructor(props){
    super(props);

    let firstName = this.props.name;

    this.state = {
      name: firstName
    }
  }
  render() {
    return (
      <h3>Last Refreshed, {this.state.name} (end of day)</h3>
    );
  }
}

export default General_info;
