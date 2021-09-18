import React, { Component } from 'react';
// import ReactDOM from 'react-dom'
import DebugCard from './DebuggingCard.jsx';

class MetricsContainer extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    let cardsToRender = [
      <DebugCard
        errortype = {'Producer could not communicate with broker!'}
        nodesinvolved = {['Service 1', 'Broker 1']}
        key = {`debugcard${1}`}
      />,
      <DebugCard
        errortype = {'Broker could not communicate with consumer!'}
        nodesinvolved = {['Broker 2', 'Service 3']}
        key = {`debugcard${2}`}
      />,
    ];

    return (
      <div id="debug-container">
        {/* {cardsToRender} */}
      </div>
    );
  };
}

export default MetricsContainer;