import React, { Component } from 'react';

class Update_button extends Component {
  constructor(props){
    super(props);
    this.click = this.click.bind(this);

    this.state = {
      greeting: ''
    };

  }
  click(e) {
    this.setState({
      greeting: 'Updating data'
    });
  }
  render() {
    return (
      <div>
        <button onClick={this.click}>Update </button>
        <p>{this.state.greeting}</p>
      </div>
    );
  }
}

export default Update_button;
