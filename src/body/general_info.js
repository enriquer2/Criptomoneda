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
      <h4>Last Refreshed: {this.state.name}</h4>
    );
  }
}

export default General_info;
