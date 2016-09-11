import React, { PropTypes }     from 'react';
import { Link }                 from 'react-router';

export default class Marker extends React.Component {
  static propTypes = {
    marker: PropTypes.object
  }
  render() {
    const { id, left, top, hoverText } = this.props.marker;
    const style = {
      left: left,
      top: top
    };
    return (
      <Link
        className="Marker"
        style={style}
        to={`/locations/${id}`}
      >
        <span className="marker-icon" />
        <span className="hover-text">{hoverText}</span>
      </Link>
    )
  }
}
