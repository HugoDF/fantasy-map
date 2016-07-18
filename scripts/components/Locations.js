const React         = require('react');
const { PropTypes } = React;
const Marker        = require('./Marker');

export default class Locations extends React.Component {
  static propTypes = {
    markers: PropTypes.array
  }
  render() {
    return (
      <div className="Locations">
        {this.props.markers.map( (marker, index) => {
          return <Marker key={index} marker={marker} />
        })}
      </div>
    );
  }
}
