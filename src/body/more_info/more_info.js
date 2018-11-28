import React, { Component } from 'react';
import './more_info.css';
import Message from './message';
import Show_button from './show_button';
import Hide_button from './hide_button';

class More_info extends Component {
  constructor(props){
    super(props);

    this.handleShowClick = this.handleShowClick.bind(this);
    this.handleHideClick = this.handleHideClick.bind(this);

    let dbName = this.props.name;

    this.state = {
      isShown: false,
      dbName: dbName
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
    const dbName = this.state.dbName;
    let button;

    if (isShown) {
      button = <Hide_button onClick={this.handleHideClick} />;
    } else {
      button = <Show_button onClick={this.handleShowClick} />;
    }

    return (
      <div class="more_coin_info">
        {button}
        <Message isShown={isShown} name={dbName} />
      </div>
    );
  }
}

export default More_info;
