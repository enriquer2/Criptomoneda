import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <div>
        Project for FINAMETRIX, made by {this.props.name}.
      </div>
    );
  }
}

export default Footer;
