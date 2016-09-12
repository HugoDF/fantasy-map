import React, { PropTypes }     from 'react';
import SVGs                     from '../data/svg';

export default class HoverArea extends React.Component {
  static contextTypes = {
    router: PropTypes.object
  }
  constructor(props) {
    super(props);
    this.state = { stroke: props.stroke};
  }
  handleHover = (colour) => {
    return () => {
        this.setState({ stroke: colour });
    }
  }
  handleClick = () => {
    const { name } = this.props;
    this.context.router.push(`/locations/${name}`);
  }
  render() {
    const { name, width, left, top,
            viewBox = '0 0 744.09448819 1052.3622047',
            stroke = 'transparent',
            strokeActive = 'gold' } = this.props;
    return (
      <svg
        className="HoverArea"
        viewBox={viewBox}
        preserveAspectRatio="xMidYMid slice"
        stroke={this.state.stroke}
        onMouseOver={this.handleHover(strokeActive)}
        onMouseOut={this.handleHover(stroke)}
        onClick={this.handleClick}
        style={{width, left, top}}>
        {SVGs[name]}
      </svg>
    );

  }
}
