import React                from 'react';
import SVGs                 from '../data/svg';

export default class HoverArea extends React.Component {
  constructor(props) {
    super(props);
    this.state = { stroke: props.stroke};
  }
  handleHover = (colour) => {
    return () => {
        this.setState({ stroke: colour });
    }
  }
  render() {
    return (
      <svg
        height={this.props.height}
        viewBox="0 0 744.09448819 1052.3622047"
        preserveAspectRatio="xMidYMid slice"
        stroke={this.state.stroke}
        onMouseOver={this.handleHover(this.props.strokeActive)}
        onMouseOut={this.handleHover(this.props.stroke)}
        style={{float: 'left'}}>
        {SVGs[this.props.name]}
      </svg>
    );

  }
}
