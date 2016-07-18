const React           = require('react');
const { PropTypes }   = React;
const { Link }        = require('react-router');

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
        to={`/location/${id}`}
      >
        <span className="marker-icon" />
        <span className="hover-text">{hoverText}</span>
      </Link>
    )
  }
}
