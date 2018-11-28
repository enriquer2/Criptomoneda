import React, { Component } from 'react';
import './load_button.css';

function Show_button(props) {
  return (
    <button onClick={props.onClick} class="load_button">
      More info
    </button>
  );
}

export default Show_button;
