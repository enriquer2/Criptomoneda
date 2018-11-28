import React, { Component } from 'react';
import './message.css';
import Load_info from './load_info';

function ShowMessage(props) {
  const dbName = props.name;
  return (
    <div>
      <h5>{dbName} History</h5>
      <Load_info name={dbName}/>
    </div>
  )
}

function HideMessage(props) {
  return <h3></h3>;
}

function Message(props) {
  const isShown = props.isShown;
  const dbName = props.name;
  if (isShown) {
    return (
      <div class="message">
        <ShowMessage name={dbName}/>
      </div>
    )
  }
  return <HideMessage />;
}

export default Message;
