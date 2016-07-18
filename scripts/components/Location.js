const React = require('react');

export default class Location extends React.Component {
  render() {
    return <div className="Location">LOCATION: {this.props.params.location}</div>;
  }
}
