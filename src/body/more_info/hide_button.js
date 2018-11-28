import React, { Component } from 'react';
import './load_button.css';

function Hide_button(props) {
  return (
    <button onClick={props.onClick} class="load_button">
      Hide Info
    </button>
  );
}

export default Hide_button;
