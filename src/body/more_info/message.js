import React, { Component } from 'react';
import Load_info from './load_info';

function ShowMessage(props) {
  return (
    <div>
      <h3>History</h3>
      <Load_info />
    </div>
  )
}

function HideMessage(props) {
  return <h3></h3>;
}

function Message(props) {
  const isShown = props.isShown;
  if (isShown) {
    return (
      <div>
        <ShowMessage />
      </div>
    )
  }
  return <HideMessage />;
}

export default Message;