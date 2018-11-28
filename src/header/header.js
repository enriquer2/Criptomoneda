import React, { Component } from 'react';

class Header extends Component {
  constructor(props){
    super(props);

    let firstName = this.props.name;

    this.state = {
      name: firstName
    }
  }
  render() {
    return (
      <h1>{this.state.name} APP</h1>
    );
  }
}

export default Header;
