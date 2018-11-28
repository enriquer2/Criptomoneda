import React, { Component } from 'react';
import Show_button from './show_button';
import Hide_button from './hide_button';

class More_info extends Component {
  constructor(props){
    super(props);

    this.handleShowClick = this.handleShowClick.bind(this);
    this.handleHideClick = this.handleHideClick.bind(this);

    this.state = {
      isShown: false,
    }
  }

  handleShowClick() {
    this.setState({isShown: true});
  }

  handleHideClick() {
    this.setState({isShown: false});
  }

  render() {
    const isShown = this.state.isShown;
    let button;

    if (isShown) {
      button = <Hide_button onClick={this.handleHideClick} />;
    } else {
      button = <Show_button onClick={this.handleShowClick} />;
    }

    return (
      <div>
        {button}
      </div>
    );
  }
}

export default More_info;
