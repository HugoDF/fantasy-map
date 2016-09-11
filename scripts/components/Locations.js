import React, { PropTypes } from 'react';
import HoverArea            from './HoverArea';

export default class Locations extends React.Component {
  render() {
    return (
      <div className="Locations">
        <HoverArea
          name="ivoryKingdoms"
          height="300px"
          left="0"
          top="0"
          stroke="green"
          strokeActive="red" />
        <HoverArea
          name="jungle"
          height="300px"
          left="0"
          top="0"
          stroke="red"
          strokeActive="green" />
        <HoverArea
          name="desert"
          height="300px"
          left="0"
          top="0"
          stroke="orange"
          strokeActive="green" />
        <HoverArea
          name="steppes"
          height="300px"
          left="0"
          top="0"
          stroke="orange"
          strokeActive="green" />
        <HoverArea
          name="swamps"
          height="300px"
          left="0"
          top="0"
          stroke="orange"
          strokeActive="green" />
        <HoverArea
          name="plains"
          height="300px"
          left="0"
          top="0"
          stroke="orange"
          strokeActive="green" />
      </div>
    );
  }
}
